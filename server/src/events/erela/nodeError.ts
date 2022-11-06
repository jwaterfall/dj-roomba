import { Node } from "erela.js";
import { Event } from '../../Event';

export const event: Event = {
  name: 'nodeError',
  once: false,
  execute: async (client, node: Node, error) => {
    client.logger.info(`Node "${node.options.identifier}" encountered an error: ${error.message}`);
  },
};
