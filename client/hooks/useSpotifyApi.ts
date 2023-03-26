import { useEffect, useMemo } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';

import useAuth from '../components/AuthProvider';

const useSpotifyApi = () => {
  const { spotifyAccessToken } = useAuth();

  const spotifyApi = useMemo(
    () => new SpotifyWebApi({
      clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
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
