import { ActivityType } from "discord.js";
import { Event } from "../../Event";

export const event: Event = {
  name: "ready",
  once: true,
  execute: async (client) => {
    if (!client.user) return;
    client.manager.init(client.user.id);
    client.user.setActivity("music", { type: ActivityType.Playing });
    client.logger.info(`Logged in as ${client.user.tag}`);
  },
};
