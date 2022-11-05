import { SocketEvent } from '../../Event';

export const event: SocketEvent = {
  name: 'nextTrack',
  once: false,
  execute: async (client, player) => {
    player.stop();
  },
};
