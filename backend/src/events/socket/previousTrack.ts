import { SocketEvent } from "../../Event";

export const event: SocketEvent = {
  name: "previousTrack",
  once: false,
  execute: async (client, player) => {
    const currentTrack = player.queue.current;
    if (!currentTrack) return;

    player.play(currentTrack);
  },
};
