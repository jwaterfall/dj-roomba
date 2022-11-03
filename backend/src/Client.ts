import { Event, Requester } from "./Event";
import Logger from "Logger";
import axios from "axios";
import { Client as DiscordClient, ClientOptions, Collection } from "discord.js";
import { Manager } from "erela.js";
import { readdirSync } from "fs";
import { join as joinPath } from "path";
import { Server } from "socket.io";

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
      const event: Event = contents.event;
      this[event.once ? "once" : "on"](event.name, (...args) => event.execute(this, ...args));
    }
  }

  private async initializeErelaEvents() {
    const path = joinPath(__dirname, "events", "erela");
    const files = readdirSync(path).filter((file) => file.endsWith(".ts"));

    for (const file of files) {
      const contents = await import(joinPath(path, file));
      const event: Event = contents.event;
      this.manager[event.once ? "once" : "on"](event.name as any, (...args) => event.execute(this, ...args));
    }
  }

  private async initializeSocketEvents() {
    const path = joinPath(__dirname, "events", "socket");
    const files = readdirSync(path).filter((file) => file.endsWith(".ts"));

    for (const file of files) {
      const contents = await import(joinPath(path, file));
      const event: Event = contents.event;
      this.socketEvents.set(event.name, event);
    }

    this.io.on("connection", async (socket) => {
      const discordAccessToken: string = socket.handshake.auth.discordAccessToken;
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

      socket.join(guild);

      const player = this.manager.create({
        guild,
        voiceChannel,
        textChannel,
      });

      player.connect();

      socket.emit("setCurrentTrack", player.queue.current);
      socket.emit("setQueuedTracks", player.queue);
      socket.emit("setIsPaused", player.paused);
      socket.emit("setIsOnRepeat", player.trackRepeat);

      for (const event of this.socketEvents.values()) {
        socket[event.once ? "once" : "on"](event.name, (...args) => event.execute(this, player, requester, ...args));
      }
    });
  }
}

export default Client;
