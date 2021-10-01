import {useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import {useAuthContext} from '../contexts/auth';

const useSpotifyApi = () => {
  const {spotifyAccessToken} = useAuthContext();

  const spotifyApi = new SpotifyWebApi({
    clientId: 'f422d702113a4f448dec04e19d37f9d9',
    accessToken: spotifyAccessToken,
  });

  useEffect(() => {
    if (spotifyAccessToken) spotifyApi.setAccessToken(spotifyAccessToken);
  }, [spotifyAccessToken]);

  return spotifyApi;
};

export default useSpotifyApi;
