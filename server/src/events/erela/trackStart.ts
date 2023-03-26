import { TextChannel } from 'discord.js';
import { Track, Player } from 'erela.js';
import { Event } from '../../Event';

export const event: Event = {
  name: 'trackStart',
  once: false,
  execute: async (client, player: Player, track: Track) => {
    client.io.in(player.guild).emit('setCurrentTrack', track);
    client.io.in(player.guild).emit('setQueuedTracks', player.queue);

    if (!player.textChannel) return;

    const channel = client.channels.cache.get(player.textChannel) as TextChannel;
    if (!channel) return;

    client.sendEmbed(player.guild, track.title, 'Now playing...', track.uri);
  },
};
