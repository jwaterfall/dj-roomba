import { SocketEvent } from '../../Event';

export const event: SocketEvent = {
  name: 'toggleIsOnRepeat',
  once: false,
  execute: async (client, player) => {
    player.trackRepeat = !player.trackRepeat;
    client.io.in(player.guild).emit('setIsOnRepeat', player.trackRepeat);
  },
};
