import {useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import {useAuthContext} from '../contexts/auth';

const useSpotifyApi = () => {
  const {spotifyAccessToken} = useAuthContext();

  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID,
    accessToken: spotifyAccessToken,
  });

  useEffect(() => {
    if (spotifyAccessToken) spotifyApi.setAccessToken(spotifyAccessToken);
  }, [spotifyAccessToken]);

  return spotifyApi;
};

export default useSpotifyApi;
