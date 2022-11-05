import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface PlaybackState {
  currentTrack?: QueuedTrack;
  queuedTracks: QueuedTrack[];
  isPaused: boolean;
  isOnRepeat: boolean;
}

const initialState: PlaybackState = {
  queuedTracks: [],
  isPaused: false,
  isOnRepeat: false,
};

export const playbackSlice = createSlice({
  name: 'playback',
  initialState,
  reducers: {
    setCurrentTrack: (
      state,
      action: PayloadAction<QueuedTrack | undefined>,
    ) => {
      state.currentTrack = action.payload;
    },
    setQueuedTracks: (state, action: PayloadAction<QueuedTrack[]>) => {
      state.queuedTracks = action.payload;
    },
    setIsPaused: (state, action: PayloadAction<boolean>) => {
      state.isPaused = action.payload;
    },
    setIsOnRepeat: (state, action: PayloadAction<boolean>) => {
      state.isOnRepeat = action.payload;
    },
  },
});

export const {
  setCurrentTrack, setQueuedTracks, setIsPaused, setIsOnRepeat,
} = playbackSlice.actions;

export const selectPlayback = (state: RootState) => state.playback;

export default playbackSlice.reducer;
