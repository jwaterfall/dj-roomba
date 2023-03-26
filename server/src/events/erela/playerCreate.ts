import { Player } from 'erela.js';
import { Event } from '../../Event';

export const event: Event = {
  name: 'playerCreate',
  once: false,
  execute: async (client, player: Player) => {
    client.logger.info(`Player created for guild ${player.guild}`);
  },
};
