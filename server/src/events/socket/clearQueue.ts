import { SocketEvent } from '../../Event';

export const event: SocketEvent = {
  name: 'clearQueue',
  once: false,
  execute: async (client, player) => {
    player.queue.clear();
    client.io.in(player.guild).emit('setQueuedTracks', player.queue);
  },
};
