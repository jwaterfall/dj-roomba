import { Event } from "../../Event";

export const event: Event = {
  name: 'queueEnd',
  once: false,
  execute: async (client, player) => {
    client.io.in(player.guild).emit('currentTrack', undefined);
    client.io.in(player.guild).emit('queuedTracks', []);
  },
};
