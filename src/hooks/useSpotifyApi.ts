import {useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import {useAppSelector} from '../redux/store';
import {selectAuth} from '../redux/slices/authSlice';

const useSpotifyApi = () => {
  const {spotifyAccessToken} = useAppSelector(selectAuth);

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
