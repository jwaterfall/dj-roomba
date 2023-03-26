import { Node } from 'erela.js';
import { Event } from '../../Event';

export const event: Event = {
  name: 'nodeConnect',
  once: false,
  execute: async (client, node: Node) => {
    client.logger.info(`Lavalink node "${node.options.identifier}" connected`);
  },
};
