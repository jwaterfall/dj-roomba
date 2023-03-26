import { VoiceState } from 'discord.js';
import { Player } from 'erela.js';
import { Event } from '../../Event';

export const event: Event = {
  name: 'voiceStateUpdate',
  once: false,
  execute: async (client, oldState: VoiceState, newState: VoiceState) => {
    const guildId = oldState.guild.id;

    const isBot = client.user && client.user.id === newState.id;
    const disconnected = !newState.channelId && oldState.channelId;
    const movedChannels = newState.channelId && oldState.channelId && newState.channelId !== oldState.channelId;
    const oldChannelMemberCount = oldState.channel?.members.size ?? 0;
    const newChannelMemberCount = newState.channel?.members.size ?? 0;

    if (disconnected && isBot) {
      client.sendEmbed(guildId, 'Disconnected', 'The bot was disconnected from the voice channel.');
      client.destroyPlayer(guildId);
    } else if (movedChannels && isBot && newChannelMemberCount <= 1) {
      client.sendEmbed(guildId, 'Disconnected', 'The bot was moved to an empty voice channel.');
      client.destroyPlayer(guildId);
    } else if (movedChannels && isBot) {
      const player = client.manager.players.get(guildId);
      if (!player) return;

      player.voiceChannel = newState.channelId;
      client.sendEmbed(guildId, 'Moved', 'The bot was moved to a new voice channel.');
    } else if (disconnected && oldChannelMemberCount <= 1) {
      client.sendEmbed(guildId, 'Disconnected', 'The last member left the voice channel.');
      client.destroyPlayer(guildId);
    } else if (movedChannels && oldChannelMemberCount <= 1) {
      client.sendEmbed(guildId, 'Disconnected', 'The last member moved to a different voice channel.');
      client.destroyPlayer(guildId);
    }
  },
};
