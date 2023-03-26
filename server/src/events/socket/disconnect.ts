import { SocketEvent } from '../../Event';

export const event: SocketEvent = {
  name: 'disconnect',
  once: false,
  execute: async (client, player, requester) => {
    client.logger.debug(`User ${requester.username} disconnected from guild ${player.guild}`);
  },
};
