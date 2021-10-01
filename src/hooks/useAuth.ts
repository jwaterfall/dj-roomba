import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import dayjs from 'dayjs';
import axios from 'axios';

const dateLog = (text: string) =>
  console.log(`[${dayjs().format('DD-MM-YYYY HH:ss')}] ${text}`);

export default function useAuth() {
  const [spotifyAuthCode, setSpotifyAuthCode] = useState<string>();
  const [spotifyAccessToken, setSpotifyAccessToken] = useState<string>();
  const [spotifyRefreshToken, setSpotifyRefreshToken] = useState<string>();
  const [spotifyExpiresIn, setSpotifyExpiresIn] = useState<number>();
  const history = useHistory();

  useEffect(() => {
    if (!spotifyAuthCode) return;
    axios
      .post('http://localhost:3001/auth/spotify/login', {
        authCode: spotifyAuthCode,
      })
      .then((res) => {
        dateLog('Successfully retrieved spotify access token');
        setSpotifyRefreshToken(res.data.refreshToken);
        setSpotifyAccessToken(res.data.accessToken);
        setSpotifyExpiresIn(res.data.expiresIn);
        history.push('/');
      })
      .catch(() => {
        history.push('/');
      });
  }, [spotifyAuthCode]);

  useEffect(() => {
    if (!spotifyRefreshToken || !spotifyExpiresIn) return;
    const interval = setInterval(() => {
      axios
        .post('http://localhost:3001/auth/spotify/refresh', {
          refreshToken: spotifyRefreshToken,
        })
        .then((res) => {
          dateLog('Successfully refreshed spotify access token');
          setSpotifyAccessToken(res.data.accessToken);
          setSpotifyExpiresIn(res.data.expiresIn);
        })
        .catch(() => {
          history.push('/');
        });
    }, (spotifyExpiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [spotifyRefreshToken, spotifyExpiresIn]);

  return {spotifyAccessToken, setSpotifyAuthCode};
}
