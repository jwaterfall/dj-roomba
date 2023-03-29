import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

interface AuthState {
  spotifyAuthCode?: string;
  spotifyAccessToken?: string;
  spotifyRefreshToken?: string;
  spotifyTokenExpiresAt?: string;
  isSpotifyAuthenticating: boolean;
  discordAuthCode?: string;
  discordAccessToken?: string;
  discordRefreshToken?: string;
  discordTokenExpiresAt?: string;
  isDiscordAuthenticating: boolean;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isSpotifyAuthenticating: false,
  isDiscordAuthenticating: false,
  isAuthenticated: false,
};

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
    setSpotifyTokenExpiresAt: (state, action: PayloadAction<string>) => {
      state.spotifyTokenExpiresAt = action.payload;
    },
    setIsSpotifyAuthenticating: (state, action: PayloadAction<boolean>) => {
      state.isSpotifyAuthenticating = action.payload;
    },
    setDiscordAuthCode: (state, action: PayloadAction<string>) => {
      state.discordAuthCode = action.payload;
    },
    setDiscordAccessToken: (state, action: PayloadAction<string>) => {
      state.discordAccessToken = action.payload;
    },
    setDiscordRefreshToken: (state, action: PayloadAction<string>) => {
      state.discordRefreshToken = action.payload;
    },
    setDiscordTokenExpiresAt: (state, action: PayloadAction<string>) => {
      state.discordTokenExpiresAt = action.payload;
    },
    setIsDiscordAuthenticating: (state, action: PayloadAction<boolean>) => {
      state.isDiscordAuthenticating = action.payload;
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
  setSpotifyTokenExpiresAt,
  setIsSpotifyAuthenticating,
  setDiscordAuthCode,
  setDiscordAccessToken,
  setDiscordRefreshToken,
  setDiscordTokenExpiresAt,
  setIsDiscordAuthenticating,
  setIsAuthenticated,
} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
