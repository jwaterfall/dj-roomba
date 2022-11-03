import { Event } from "../../Event";
import { MessageEmbed, TextChannel } from "discord.js";
import { Track } from "erela.js";

export const event: Event = {
  name: "trackStart",
  once: false,
  execute: async (client, player, track: Track) => {
    client.io.in(player.guild).emit("currentTrack", track);
    client.io.in(player.guild).emit("queuedTracks", player.queue);

    if (!player.textChannel) return;

    const channel = client.channels.cache.get(player.textChannel) as TextChannel;
    if (!channel) return;

    const embed = new MessageEmbed()
      .setColor("#00d0f5")
      .setDescription("Now Playing...")
      .setTitle(`${track.title} - ${track.author}`)
      .setURL(track.uri);

    channel.send({ embeds: [embed] });
  },
};
