import { VoicePacket } from "erela.js";
import { Event } from "../../Event";

export const event: Event = {
  name: "raw",
  once: false,
  execute: async (client, data: VoicePacket) => {
    client.manager.updateVoiceState(data);
  },
};
