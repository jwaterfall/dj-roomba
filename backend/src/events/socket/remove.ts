import { SocketEvent } from "../../Event";

export const event: SocketEvent = {
  name: "remove",
  once: false,
  execute: async (client, player, requester, index: number) => {
    if (index < 1 || index > player.queue.length) return;

    player.queue.remove(index - 1);
    client.io.in(player.guild).emit("setQueuedTracks", player.queue);
  },
};
