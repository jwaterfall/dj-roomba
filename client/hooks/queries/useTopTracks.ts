import { useQuery } from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';

import useSpotifyApi from '../useSpotifyApi';

const getTopTracks = async (spotifyApi: SpotifyWebApi, limit: number) => {
  const response = await spotifyApi.getMyTopTracks({ limit });
  const tracks = response.body.items;

  return tracks;
};

const useTopTracks = (limit = 10) => {
  const spotifyApi = useSpotifyApi();
  return useQuery(['TOP_TRACKS', limit], () => getTopTracks(spotifyApi, limit));
};

export default useTopTracks;
