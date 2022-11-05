import { SocketEvent } from '../../Event';

export const event: SocketEvent = {
  name: 'shuffle',
  once: false,
  execute: async (client, player) => {
    player.queue.shuffle();
    client.io.in(player.guild).emit('setQueuedTracks', player.queue);
  },
};
