import { SocketEvent } from '../../Event';

export const event: SocketEvent = {
  name: 'play',
  once: false,
  execute: async (client, player, requester, query: string, queue = false) => {
    player.pause(false);
    client.io.in(player.guild).emit('setIsPaused', player.paused);

    if (!queue) {
      player.queue.clear();
      if (player.playing) player.stop();
    }

    const res = await player.search(query, requester);

    switch (res.loadType) {
      case 'LOAD_FAILED':
        if (!player.queue.current) player.destroy();
        throw res.exception;

      case 'NO_MATCHES':
        return;

      case 'PLAYLIST_LOADED':
        player.queue.add(res.tracks);
        if (!player.playing && !player.paused) player.play();

        break;
      case 'TRACK_LOADED':
      case 'SEARCH_RESULT':
        const track = res.tracks[0];
        player.queue.add(track);

        if (!player.playing && !player.paused) player.play();
    }

    client.io.in(player.guild).emit('setQueuedTracks', player.queue);
  },
};
