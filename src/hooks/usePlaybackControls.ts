import React from 'react';
import {usePlaybackContext, Track} from '../contexts/playback';

const usePlaybackControls = () => {
  const {socket} = usePlaybackContext();

  const playTracks = (tracks: SpotifyApi.TrackObjectSimplified[]) => {
    if (!socket) return;
    socket.emit('playTracks', tracks);
  };

  const queueTracks = (tracks: SpotifyApi.TrackObjectSimplified[]) => {
    if (!socket) return;
    socket.emit('queueTracks', tracks);
  };

  return {playTracks, queueTracks};
};

export default usePlaybackControls;
