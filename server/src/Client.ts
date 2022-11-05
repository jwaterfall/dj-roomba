import Logger from "Logger";
import axios from "axios";
import { ChannelType, Client as DiscordClient, ClientOptions, Collection, EmbedBuilder } from "discord.js";
import { Manager } from "erela.js";
import { readdirSync } from "fs";
import { join as joinPath } from "path";
import { Server } from "socket.io";
import { Event, Requester } from "./Event";

class Client extends DiscordClient {
  private socketEvents = new Collection<string, Event>();

  public constructor(options: ClientOptions, public readonly manager: Manager, public readonly io: Server, public readonly logger: Logger) {
    super(options);
    this.initializeDiscordEvents();
    this.initializeErelaEvents();
    this.initializeSocketEvents();
  }

  private async initializeDiscordEvents() {
    const path = joinPath(__dirname, "events", "discord");
    const files = readdirSync(path).filter((file) => file.endsWith(".ts"));

    for (const file of files) {
      const contents = await import(joinPath(path, file));
      const { event } = contents;
      this[event.once ? "once" : "on"](event.name, (...args) => event.execute(this, ...args));
    }
  }

  private async initializeErelaEvents() {
    const path = joinPath(__dirname, "events", "erela");
    const files = readdirSync(path).filter((file) => file.endsWith(".ts"));

    for (const file of files) {
      const contents = await import(joinPath(path, file));
      const { event } = contents;
      this.manager[event.once ? "once" : "on"](event.name as any, (...args) => event.execute(this, ...args));
    }
  }

  private async initializeSocketEvents() {
    const path = joinPath(__dirname, "events", "socket");
    const files = readdirSync(path).filter((file) => file.endsWith(".ts"));

    for (const file of files) {
      const contents = await import(joinPath(path, file));
      const { event } = contents;
      this.socketEvents.set(event.name, event);
    }

    this.io.on("connection", async (socket) => {
      const { discordAccessToken } = socket.handshake.auth;
      if (!discordAccessToken) return;

      const response = await axios.get("https://discord.com/api/users/@me", {
        headers: {
          authorization: `Bearer ${discordAccessToken}`,
        },
      });

      const requester: Requester = response.data;
      const guild = "210120672087769089";
      const voiceChannel = "276370462143938560";
      const textChannel = "893789722172878909";

      const player = this.manager.players.get(guild) ?? this.createPlayer(guild, voiceChannel, textChannel);

      socket.join(guild);

      socket.emit("setCurrentTrack", player.queue.current);
      socket.emit("setQueuedTracks", player.queue);
      socket.emit("setIsPaused", player.paused);
      socket.emit("setIsOnRepeat", player.trackRepeat);

      for (const event of this.socketEvents.values()) {
        socket[event.once ? "once" : "on"](event.name, (...args) => event.execute(this, player, requester, ...args));
      }

      this.logger.debug(`User ${requester.username} connected to guild ${guild}`);
    });
  }

  public getTextChannel(guildId: string) {
    const player = this.manager.players.get(guildId);
    if (!player?.textChannel) return undefined;

    const channel = this.channels.cache.get(player.textChannel);
    if (!channel || channel.type !== ChannelType.GuildText) return undefined;

    return channel;
  }

  public sendEmbed(guildId: string, title: string, description: string, url?: string) {
    const channel = this.getTextChannel(guildId);
    if (!channel) return;

    const embed = new EmbedBuilder()
      .setColor("#F42728")
      .setDescription(description)
      .setTitle(title)
      .setURL(url ?? null);

    channel.send({ embeds: [embed] });
  }

  private createPlayer(guildId: string, voiceChannelId: string, textChannelId: string) {
    const player = this.manager.create({
      guild: guildId,
      voiceChannel: voiceChannelId,
      textChannel: textChannelId,
    });

    player.connect();
    this.logger.info(`Created player for guild ${guildId}`);

    return player;
  }

  public destroyPlayer(guildId: string) {
    const player = this.manager.players.get(guildId);
    if (!player) return false;

    player.destroy();
    this.logger.info(`Destroyed player for guild ${guildId}`);

    this.io.in(guildId).disconnectSockets();
  }
}

export default Client;
