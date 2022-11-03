import { SocketEvent } from "../../Event";

export const event: SocketEvent = {
  name: "skipTo",
  once: false,
  execute: async (client, player, requester, index: number) => {
    if (index < 1 || index > player.queue.length) return;

    if (index !== 1) {
      player.queue.splice(0, index - 1);
    }

    player.stop();
    client.io.in(player.guild).emit("setQueuedTracks", player.queue);
  },
};
