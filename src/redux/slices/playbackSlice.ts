import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface PlaybackState {
  currentTrack?: ProcessedTrack;
  queuedTracks: ProcessedTrack[];
  isPaused: boolean;
  isOnRepeat: boolean;
  isOnShuffle: boolean;
}

const initialState: PlaybackState = {
  queuedTracks: [],
  isPaused: false,
  isOnRepeat: false,
  isOnShuffle: false,
};

export const playbackSlice = createSlice({
  name: 'playback',
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<ProcessedTrack>) => {
      state.currentTrack = action.payload;
    },
    setQueuedTracks: (state, action: PayloadAction<ProcessedTrack[]>) => {
      state.queuedTracks = action.payload;
    },
    setIsPaused: (state, action: PayloadAction<boolean>) => {
      state.isPaused = action.payload;
    },
    setIsOnRepeat: (state, action: PayloadAction<boolean>) => {
      state.isOnRepeat = action.payload;
    },
    setIsOnShuffle: (state, action: PayloadAction<boolean>) => {
      state.isOnShuffle = action.payload;
    },
  },
});

export const {
  setCurrentTrack,
  setQueuedTracks,
  setIsPaused,
  setIsOnRepeat,
  setIsOnShuffle,
} = playbackSlice.actions;

export const selectPlayback = (state: RootState) => state.playback;

export default playbackSlice.reducer;
