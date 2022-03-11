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

  const dateLog = (text: string) =>
    console.log(`[${dayjs().format('DD-MM-YYYY HH:ss')}] ${text}`);

  useEffect(() => {
    if (spotifyAccessToken || !spotifyAuthCode) return;
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER}/auth/spotify/login`, {
        authCode: spotifyAuthCode,
      })
      .then((res) => {
        dateLog('Successfully retrieved spotify access token');
        dispatch(setSpotifyRefreshToken(res.data.refreshToken));
        dispatch(setSpotifyAccessToken(res.data.accessToken));
        dispatch(setSpotifyExpiresIn(res.data.expiresIn));
        push('/sign-in-discord');
      })
      .catch(() => {
        push('/');
      });
  }, [spotifyAuthCode, dispatch, push, spotifyAccessToken]);

  useEffect(() => {
    if (!spotifyRefreshToken || !spotifyExpiresIn) return;
    const interval = setInterval(() => {
      axios
        .post(`${process.env.NEXT_PUBLIC_SERVER}/auth/spotify/refresh`, {
          refreshToken: spotifyRefreshToken,
        })
        .then((res) => {
          dateLog('Successfully refreshed spotify access token');
          dispatch(setSpotifyAccessToken(res.data.accessToken));
          dispatch(setSpotifyExpiresIn(res.data.expiresIn));
        })
        .catch(() => {
          push('/');
        });
    }, (spotifyExpiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [spotifyRefreshToken, dispatch, push, spotifyExpiresIn]);

  useEffect(() => {
    if (discordAccessToken || !discordAuthCode) return;
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER}/auth/discord/login`, {
        authCode: discordAuthCode,
      })
      .then((res) => {
        dateLog('Successfully retrieved discord access token');
        dispatch(setDiscordRefreshToken(res.data.refreshToken));
        dispatch(setDiscordAccessToken(res.data.accessToken));
        dispatch(setDiscordExpiresIn(res.data.expiresIn));
        push('/');
      })
      .catch(() => {
        push('/');
      });
  }, [discordAuthCode, dispatch, push, discordAccessToken]);

  useEffect(() => {
    if (!discordRefreshToken || !discordExpiresIn) return;
    const interval = setInterval(() => {
      axios
        .post(`${process.env.NEXT_PUBLIC_SERVER}/auth/discord/refresh`, {
          refreshToken: discordRefreshToken,
        })
        .then((res) => {
          dateLog('Successfully refreshed discord access token');
          dispatch(setDiscordAccessToken(res.data.accessToken));
          dispatch(setDiscordExpiresIn(res.data.expiresIn));
        })
        .catch(() => {
          push('/');
        });
    }, (discordExpiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [discordRefreshToken, dispatch, push, discordExpiresIn]);

  return <></>;
};

export default Auth;
