import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

interface AuthState {
  spotifyAuthCode?: string;
  spotifyAccessToken?: string;
  spotifyRefreshToken?: string;
  spotifyExpiresIn?: number;
  discordAuthCode?: string;
  discordAccessToken?: string;
  discordRefreshToken?: string;
  discordExpiresIn?: number;
  isAuthenticated?: boolean;
}

const initialState: AuthState = { isAuthenticated: false };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSpotifyAuthCode: (state, action: PayloadAction<string>) => {
      state.spotifyAuthCode = action.payload;
    },
    setSpotifyAccessToken: (state, action: PayloadAction<string>) => {
      state.spotifyAccessToken = action.payload;
    },
    setSpotifyRefreshToken: (state, action: PayloadAction<string>) => {
      state.spotifyRefreshToken = action.payload;
    },
    setSpotifyExpiresIn: (state, action: PayloadAction<number>) => {
      state.spotifyExpiresIn = action.payload;
    },
    setDiscordAuthCode: (state, action: PayloadAction<string>) => {
      state.discordAuthCode = action.payload;
    },
    setDiscordAccessToken: (state, action: PayloadAction<string>) => {
      state.discordAccessToken = action.payload;
      state.isAuthenticated = true;
    },
    setDiscordRefreshToken: (state, action: PayloadAction<string>) => {
      state.discordRefreshToken = action.payload;
    },
    setDiscordExpiresIn: (state, action: PayloadAction<number>) => {
      state.discordExpiresIn = action.payload;
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const {
  setSpotifyAuthCode,
  setSpotifyAccessToken,
  setSpotifyRefreshToken,
  setSpotifyExpiresIn,
  setDiscordAuthCode,
  setDiscordAccessToken,
  setDiscordRefreshToken,
  setDiscordExpiresIn,
} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
