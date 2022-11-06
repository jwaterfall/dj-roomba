import { Player } from "erela.js";
import { Event } from "../../Event";

export const event: Event = {
  name: "playerDestroy",
  once: false,
  execute: async (client, player: Player) => {
    client.logger.info(`Player destroyed for guild ${player.guild}`);
  },
};
