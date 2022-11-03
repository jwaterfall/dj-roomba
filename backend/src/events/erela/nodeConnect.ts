import { Event } from "../../Event";

export const event: Event = {
  name: "nodeConnect",
  once: false,
  execute: async (client, node) => {
    client.logger.info(`Node "${node.options.identifier}" connected.`);
  },
};
