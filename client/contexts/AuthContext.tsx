"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect, FC, useContext } from "react";
import { useSessionStorage } from "usehooks-ts";
import axios from "axios";

const AUTH_URL_DISCORD = `https://discord.com/api/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI}&response_type=code&scope=identify`;
const AUTH_URL_SPOTIFY = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI}&response_type=code&scope=streaming%20user-read-email%20user-follow-read%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private%20playlist-read-collaborative%20user-top-read
`;

interface Auth {
  discordAccessToken: string | null;
  spotifyAccessToken: string | null;
  isDiscordAuthenticated: boolean;
  isSpotifyAuthenticated: boolean;
  isAuthenticated: boolean;
  setDiscordAuthCode: (code: string) => void;
  setSpotifyAuthCode: (code: string) => void;
}

const AuthContext = createContext({} as Auth);

interface AccessTokenResponse {
  accessToken: string;
  expiresIn: number;
}

interface RefreshTokenResponse extends AccessTokenResponse {
  refreshToken: string;
}

export const AuthProvider: FC = ({ children }) => {
  const router = useRouter();
  const [discordAccessToken, setDiscordAccessToken] = useSessionStorage<string | null>("discordAccessToken", null);
  const [discordRefreshToken, setDiscordRefreshToken] = useSessionStorage<string | null>("discordRefreshToken", null);
  const [discordTokenExpiresAt, setDiscordTokenExpiresAt] = useSessionStorage<string | null>("discordTokenExpiresAt", null);
  const [discordAuthCode, setDiscordAuthCode] = useState<string | null>(null);
  const [isDiscordAuthenticating, setIsDiscordAuthenticating] = useSessionStorage("isDiscordAuthenticating", false);
  const [spotifyAccessToken, setSpotifyAccessToken] = useSessionStorage<string | null>("spotifyAccessToken", null);
  const [spotifyRefreshToken, setSpotifyRefreshToken] = useSessionStorage<string | null>("spotifyRefreshToken", null);
  const [spotifyTokenExpiresAt, setSpotifyTokenExpiresAt] = useSessionStorage<string | null>("spotifyTokenExpiresAt", null);
  const [spotifyAuthCode, setSpotifyAuthCode] = useState<string | null>(null);
  const [isSpotifyAuthenticating, setIsSpotifyAuthenticating] = useSessionStorage("isSpotifyAuthenticating", false);

  const isDiscordAuthenticated = discordAccessToken !== null;
  const isSpotifyAuthenticated = spotifyAccessToken !== null;
  const isAuthenticated = isDiscordAuthenticated && isSpotifyAuthenticated;

  useEffect(() => {
    if (isAuthenticated || isDiscordAuthenticated || isDiscordAuthenticating) return;
    setIsDiscordAuthenticating(true);
    window.location.href = AUTH_URL_DISCORD;
  }, [isAuthenticated, isDiscordAuthenticated, isDiscordAuthenticating]);

  useEffect(() => {
    if (isAuthenticated || !isDiscordAuthenticated || isSpotifyAuthenticated || isSpotifyAuthenticating) return;
    setIsSpotifyAuthenticating(true);
    window.location.href = AUTH_URL_SPOTIFY;
  }, [isAuthenticated, isDiscordAuthenticated, isSpotifyAuthenticated, isSpotifyAuthenticating]);

  useEffect(() => {
    if (!isAuthenticated) return;
    router.push("/");
  }, [isAuthenticated]);

  const getExpiresAt = (expiresIn: number) => new Date(Date.now() + expiresIn * 1000).toISOString();
  const getTimeout = (expiresAt: string) => new Date(expiresAt).getTime() - Date.now() - 60000;

  const getDiscordAccessToken = async () => {
    const response = await axios.post<RefreshTokenResponse>(`${window.location.origin}/api/auth/discord/login`, {
      authCode: discordAuthCode,
    });

    console.log(`Fetched Discord access token: ${response.data.accessToken}, expires in ${response.data.expiresIn} seconds`);
    setDiscordAccessToken(response.data.accessToken);
    setDiscordRefreshToken(response.data.refreshToken);
    setDiscordTokenExpiresAt(getExpiresAt(response.data.expiresIn));
    setIsDiscordAuthenticating(false);
  };

  const getSpotifyAccessToken = async () => {
    const response = await axios.post<RefreshTokenResponse>(`${window.location.origin}/api/auth/spotify/login`, {
      authCode: spotifyAuthCode,
    });

    console.log(`Fetched Spotify access token: ${response.data.accessToken}, expires in ${response.data.expiresIn} seconds`);
    setSpotifyAccessToken(response.data.accessToken);
    setSpotifyRefreshToken(response.data.refreshToken);
    setSpotifyTokenExpiresAt(getExpiresAt(response.data.expiresIn));
    setIsSpotifyAuthenticating(false);
  };

  const refreshDiscordAccessToken = async () => {
    const response = await axios.post<RefreshTokenResponse>(`${window.location.origin}/api/auth/discord/refresh`, {
      refreshToken: discordRefreshToken,
    });

    console.log(`Refreshed Discord access token: ${response.data.accessToken}, expires in ${response.data.expiresIn} seconds`);
    setDiscordAccessToken(response.data.accessToken);
    setDiscordRefreshToken(response.data.refreshToken);
    setDiscordTokenExpiresAt(getExpiresAt(response.data.expiresIn));
  };

  const refreshSpotifyAccessToken = async () => {
    const response = await axios.post<AccessTokenResponse>(`${window.location.origin}/api/auth/spotify/refresh`, {
      refreshToken: spotifyRefreshToken,
    });

    console.log(`Refreshed Spotify access token: ${response.data.accessToken}, expires in ${response.data.expiresIn} seconds`);
    setSpotifyAccessToken(response.data.accessToken);
    setSpotifyTokenExpiresAt(getExpiresAt(response.data.expiresIn));
  };

  useEffect(() => {
    if (!discordAuthCode) return;
    getDiscordAccessToken();
  }, [discordAuthCode]);

  useEffect(() => {
    if (!spotifyAuthCode) return;
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

  return (
    <AuthContext.Provider
      value={{
        discordAccessToken,
        spotifyAccessToken,
        isDiscordAuthenticated,
        isSpotifyAuthenticated,
        isAuthenticated,
        setDiscordAuthCode,
        setSpotifyAuthCode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export default useAuth;
