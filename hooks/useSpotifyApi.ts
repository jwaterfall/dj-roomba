import { useEffect, useMemo } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';

import { selectAuth } from '../redux/slices/authSlice';
import { useAppSelector } from '../redux/store';

const useSpotifyApi = () => {
  const { spotifyAccessToken } = useAppSelector(selectAuth);

  const spotifyApi = useMemo(
    () =>
      new SpotifyWebApi({
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
        accessToken: spotifyAccessToken,
      }),
    [spotifyAccessToken],
  );

  useEffect(() => {
    if (spotifyAccessToken) spotifyApi.setAccessToken(spotifyAccessToken);
  }, [spotifyAccessToken, spotifyApi]);

  return spotifyApi;
};

export default useSpotifyApi;
