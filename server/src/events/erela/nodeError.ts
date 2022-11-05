import { Event } from '../../Event';

export const event: Event = {
  name: 'nodeError',
  once: false,
  execute: async (client, node, error) => {
    client.logger.info(`Node "${node.options.identifier}" encountered an error: ${error.message}`);
  },
};
