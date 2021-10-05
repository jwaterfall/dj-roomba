import {FC, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import dayjs from 'dayjs';
import axios from 'axios';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {
  selectAuth,
  setSpotifyAccessToken,
  setSpotifyExpiresIn,
  setSpotifyRefreshToken,
  setDiscordAccessToken,
  setDiscordExpiresIn,
  setDiscordRefreshToken,
} from '../../redux/slices/authSlice';

const Auth: FC = () => {
  const history = useHistory();
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
      .post(`${process.env.REACT_APP_SERVER}/auth/spotify/login`, {
        authCode: spotifyAuthCode,
      })
      .then((res) => {
        dateLog('Successfully retrieved spotify access token');
        dispatch(setSpotifyRefreshToken(res.data.refreshToken));
        dispatch(setSpotifyAccessToken(res.data.accessToken));
        dispatch(setSpotifyExpiresIn(res.data.expiresIn));
        history.push('/sign-in-discord');
      })
      .catch(() => {
        history.push('/');
      });
  }, [spotifyAuthCode]);

  useEffect(() => {
    if (!spotifyRefreshToken || !spotifyExpiresIn) return;
    const interval = setInterval(() => {
      axios
        .post(`${process.env.REACT_APP_SERVER}/auth/spotify/refresh`, {
          refreshToken: spotifyRefreshToken,
        })
        .then((res) => {
          dateLog('Successfully refreshed spotify access token');
          dispatch(setSpotifyAccessToken(res.data.accessToken));
          dispatch(setSpotifyExpiresIn(res.data.expiresIn));
        })
        .catch(() => {
          history.push('/');
        });
    }, (spotifyExpiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [spotifyRefreshToken]);

  useEffect(() => {
    if (discordAccessToken || !discordAuthCode) return;
    axios
      .post(`${process.env.REACT_APP_SERVER}/auth/discord/login`, {
        authCode: discordAuthCode,
      })
      .then((res) => {
        dateLog('Successfully retrieved discord access token');
        dispatch(setDiscordRefreshToken(res.data.refreshToken));
        dispatch(setDiscordAccessToken(res.data.accessToken));
        dispatch(setDiscordExpiresIn(res.data.expiresIn));
        history.push('/');
      })
      .catch(() => {
        history.push('/');
      });
  }, [discordAuthCode]);

  useEffect(() => {
    if (!discordRefreshToken || !discordExpiresIn) return;
    const interval = setInterval(() => {
      axios
        .post(`${process.env.REACT_APP_SERVER}/auth/discord/refresh`, {
          refreshToken: discordRefreshToken,
        })
        .then((res) => {
          dateLog('Successfully refreshed discord access token');
          dispatch(setDiscordAccessToken(res.data.accessToken));
          dispatch(setDiscordExpiresIn(res.data.expiresIn));
        })
        .catch(() => {
          history.push('/');
        });
    }, (discordExpiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [discordRefreshToken]);

  return <></>;
};

export default Auth;
