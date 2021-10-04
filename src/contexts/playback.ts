import {createContext, useContext} from 'react';
import {Socket} from 'socket.io-client';

export interface Track {
  url: string;
  title: string;
  image: string;
  spotifyId?: string;
}

interface PlaybackContext {
  socket?: Socket;
  currentTrack?: Track;
  queuedTracks: Track[];
}

const playbackContext = createContext<PlaybackContext>({} as PlaybackContext);

export const usePlaybackContext = () => useContext(playbackContext);

export default playbackContext;
