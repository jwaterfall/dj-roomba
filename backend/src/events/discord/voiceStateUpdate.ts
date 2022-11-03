import { Event } from "../../Event";
import { VoiceState } from "discord.js";

export const event: Event = {
  name: "voiceStateUpdate",
  once: false,
  execute: async (client, oldState: VoiceState, newState: VoiceState) => {
    console.log("Voice state updated");
  },
};
