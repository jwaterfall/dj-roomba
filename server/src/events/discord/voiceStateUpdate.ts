import { VoiceState } from "discord.js";
import { Player } from "erela.js";
import { Event } from "../../Event";

export const event: Event = {
  name: "voiceStateUpdate",
  once: false,
  execute: async (client, oldState: VoiceState, newState: VoiceState) => {
    const guildId = oldState.guild.id;

    if (!oldState.channelId || newState.channelId) return;

    if (newState.id === client.user?.id) {
      client.sendEmbed(guildId, "Disconnected", "The bot was disconnected from the voice channel.");
      client.destroyPlayer(guildId);
    }

    const memberCount = oldState.channel?.members.size;
    if (memberCount === undefined) return;

    if (memberCount <= 1) {
      client.sendEmbed(guildId, "Disconnected", "The last member left the voice channel.");
      client.destroyPlayer(guildId);
    }
  },
};
