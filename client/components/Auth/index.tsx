import axios from 'axios';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

const AUTH_URL_DISCORD = `https://discord.com/api/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI}&response_type=code&scope=identify`;
const AUTH_URL_SPOTIFY = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI}&response_type=code&scope=streaming%20user-read-email%20user-follow-read%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private%20playlist-read-collaborative%20user-top-read`;

import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  selectAuth,
  setSpotifyAccessToken,
  setSpotifyTokenExpiresAt,
  setSpotifyRefreshToken,
  setIsSpotifyAuthenticating,
  setDiscordAccessToken,
  setDiscordTokenExpiresAt,
  setDiscordRefreshToken,
  setIsDiscordAuthenticating,
  setIsAuthenticated,
} from '../../redux/slices/authSlice';

interface AccessTokenResponse {
  accessToken: string;
  expiresIn: number;
}

interface RefreshTokenResponse extends AccessTokenResponse {
  refreshToken: string;
}

const Auth: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    spotifyAuthCode,
    spotifyAccessToken,
    spotifyRefreshToken,
    spotifyTokenExpiresAt,
    isSpotifyAuthenticating,
    discordAuthCode,
    discordAccessToken,
    discordRefreshToken,
    discordTokenExpiresAt,
    isDiscordAuthenticating,
    isAuthenticated,
  } = useAppSelector(selectAuth);

  const isDiscordAuthenticated = !!discordAccessToken;
  const isSpotifyAuthenticated = !!spotifyAccessToken;

  useEffect(() => {
    dispatch(setIsAuthenticated(isDiscordAuthenticated && isSpotifyAuthenticated));
  }, [isDiscordAuthenticated, isSpotifyAuthenticated]);

  useEffect(() => {
    if (isAuthenticated || isDiscordAuthenticated || isDiscordAuthenticating) return;
    dispatch(setIsDiscordAuthenticating(true));
    window.location.href = AUTH_URL_DISCORD;
  }, [isAuthenticated, isDiscordAuthenticated, isDiscordAuthenticating]);

  useEffect(() => {
    if (isAuthenticated || !isDiscordAuthenticated || isSpotifyAuthenticated || isSpotifyAuthenticating) return;
    dispatch(setIsSpotifyAuthenticating(true));
    window.location.href = AUTH_URL_SPOTIFY;
  }, [isAuthenticated, isDiscordAuthenticated, isSpotifyAuthenticated, isSpotifyAuthenticating]);

  useEffect(() => {
    if (!isAuthenticated) return;
    router.push('/');
  }, [isAuthenticated]);

  const getExpiresAt = (expiresIn: number) => new Date(Date.now() + expiresIn * 1000).toISOString();
  const getTimeout = (expiresAt: string) => new Date(expiresAt).getTime() - Date.now() - 60000;

  const getDiscordAccessToken = async () => {
    const response = await axios.post<RefreshTokenResponse>(`${window.location.origin}/api/auth/discord/login`, {
      authCode: discordAuthCode,
    });

    console.log(`Fetched Discord access token: ${response.data.accessToken}, expires in ${response.data.expiresIn} seconds`);
    dispatch(setDiscordAccessToken(response.data.accessToken));
    dispatch(setDiscordRefreshToken(response.data.refreshToken));
    dispatch(setDiscordTokenExpiresAt(getExpiresAt(response.data.expiresIn)));
    dispatch(setIsDiscordAuthenticating(false));
  };

  const getSpotifyAccessToken = async () => {
    const response = await axios.post<RefreshTokenResponse>(`${window.location.origin}/api/auth/spotify/login`, {
      authCode: spotifyAuthCode,
    });

    console.log(`Fetched Spotify access token: ${response.data.accessToken}, expires in ${response.data.expiresIn} seconds`);
    dispatch(setSpotifyAccessToken(response.data.accessToken));
    dispatch(setSpotifyRefreshToken(response.data.refreshToken));
    dispatch(setSpotifyTokenExpiresAt(getExpiresAt(response.data.expiresIn)));
    dispatch(setIsSpotifyAuthenticating(false));
  };

  const refreshDiscordAccessToken = async () => {
    const response = await axios.post<RefreshTokenResponse>(`${window.location.origin}/api/auth/discord/refresh`, {
      refreshToken: discordRefreshToken,
    });

    console.log(`Refreshed Discord access token: ${response.data.accessToken}, expires in ${response.data.expiresIn} seconds`);
    dispatch(setDiscordAccessToken(response.data.accessToken));
    dispatch(setDiscordRefreshToken(response.data.refreshToken));
    dispatch(setDiscordTokenExpiresAt(getExpiresAt(response.data.expiresIn)));
  };

  const refreshSpotifyAccessToken = async () => {
    const response = await axios.post<AccessTokenResponse>(`${window.location.origin}/api/auth/spotify/refresh`, {
      refreshToken: spotifyRefreshToken,
    });

    console.log(`Refreshed Spotify access token: ${response.data.accessToken}, expires in ${response.data.expiresIn} seconds`);
    dispatch(setSpotifyAccessToken(response.data.accessToken));
    dispatch(setSpotifyTokenExpiresAt(getExpiresAt(response.data.expiresIn)));
  };

  useEffect(() => {
    if (!discordAuthCode || isDiscordAuthenticated) return;
    getDiscordAccessToken();
  }, [discordAuthCode]);

  useEffect(() => {
    if (!spotifyAuthCode || isSpotifyAuthenticated) return;
    getSpotifyAccessToken();
  }, [spotifyAuthCode]);

  useEffect(() => {
    if (!discordRefreshToken || !discordTokenExpiresAt) return;

    setTimeout(() => {
      refreshDiscordAccessToken();
    }, getTimeout(discordTokenExpiresAt));
  }, [discordRefreshToken, discordTokenExpiresAt]);

  useEffect(() => {
    if (!spotifyRefreshToken || !spotifyTokenExpiresAt) return;

    setTimeout(() => {
      refreshSpotifyAccessToken();
    }, getTimeout(spotifyTokenExpiresAt));
  }, [spotifyRefreshToken, spotifyTokenExpiresAt]);

  return <></>;
};

export default Auth;
