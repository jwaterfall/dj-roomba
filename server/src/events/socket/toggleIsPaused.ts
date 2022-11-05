import { SocketEvent } from '../../Event';

export const event: SocketEvent = {
  name: 'toggleIsPaused',
  once: false,
  execute: async (client, player) => {
    player.pause(!player.paused);
    client.io.in(player.guild).emit('setIsPaused', player.paused);
  },
};
