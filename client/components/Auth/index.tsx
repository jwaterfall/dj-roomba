import axios from 'axios';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

import {
  selectAuth,
  setDiscordAccessToken,
  setDiscordExpiresIn,
  setDiscordRefreshToken,
  setSpotifyAccessToken,
  setSpotifyExpiresIn,
  setSpotifyRefreshToken,
} from '../../redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const Auth: FC = () => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const {
    spotifyAuthCode,
    spotifyAccessToken,
    spotifyRefreshToken,
    spotifyExpiresIn,
    discordAuthCode,
    discordAccessToken,
    discordRefreshToken,
    discordExpiresIn,
  } = useAppSelector(selectAuth);

  const dateLog = (text: string) => console.log(`[${dayjs().format('DD-MM-YYYY HH:ss')}] ${text}`);

  useEffect(() => {
    if (spotifyAccessToken || !spotifyAuthCode) return;
    axios
      .post(`${window.location.origin}/api/auth/spotify/login`, {
        authCode: spotifyAuthCode,
      })
      .then((res) => {
        dateLog('Successfully retrieved spotify access token');
        dispatch(setSpotifyRefreshToken(res.data.refreshToken));
        dispatch(setSpotifyAccessToken(res.data.accessToken));
        dispatch(setSpotifyExpiresIn(res.data.expiresIn));
        push('/sign-in-discord');
      })
      .catch((error) => {
        console.log(error);
      });
  }, [spotifyAuthCode, dispatch, push, spotifyAccessToken]);

  useEffect(() => {
    if (!spotifyRefreshToken || !spotifyExpiresIn) return;
    const interval = setInterval(() => {
      dateLog('Attempting to refresh spotify access token');
      axios
        .post(`${window.location.origin}/api/auth/spotify/refresh`, {
          refreshToken: spotifyRefreshToken,
        })
        .then((res) => {
          dateLog('Successfully refreshed spotify access token');
          dispatch(setSpotifyAccessToken(res.data.accessToken));
          dispatch(setSpotifyExpiresIn(res.data.expiresIn));
        })
        .catch((error) => {
          console.log(error);
        });
    }, (spotifyExpiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [spotifyRefreshToken, spotifyExpiresIn, dispatch]);

  useEffect(() => {
    if (discordAccessToken || !discordAuthCode) return;
    axios
      .post(`${window.location.origin}/api/auth/discord/login`, {
        authCode: discordAuthCode,
      })
      .then((res) => {
        dateLog('Successfully retrieved discord access token');
        dispatch(setDiscordRefreshToken(res.data.refreshToken));
        dispatch(setDiscordAccessToken(res.data.accessToken));
        dispatch(setDiscordExpiresIn(res.data.expiresIn));
        push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }, [discordAuthCode, dispatch, push, discordAccessToken]);

  useEffect(() => {
    if (!discordRefreshToken || !discordExpiresIn) return;
    const interval = setInterval(() => {
      dateLog('Attempting to refresh discord access token');
      axios
        .post(`${window.location.origin}/api/auth/discord/refresh`, {
          refreshToken: discordRefreshToken,
        })
        .then((res) => {
          dateLog('Successfully refreshed discord access token');
          dispatch(setDiscordAccessToken(res.data.accessToken));
          dispatch(setDiscordRefreshToken(res.data.refreshToken));
          dispatch(setDiscordExpiresIn(res.data.expiresIn));
        })
        .catch((error) => {
          console.log(error);
        });
    }, (discordExpiresIn - 60) * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [discordRefreshToken, discordExpiresIn, dispatch]);

  return <></>;
};

export default Auth;
