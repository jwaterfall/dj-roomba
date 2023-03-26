import { useQuery } from '@tanstack/react-query';
import SpotifyWebApi from 'spotify-web-api-node';

import useSpotifyApi from '../useSpotifyApi';

const getNewReleases = async (spotifyApi: SpotifyWebApi, limit: number) => {
  const response = await spotifyApi.getNewReleases({ limit });
  const albums = response.body.albums.items;

  return albums;
};

const useNewReleases = (limit = 10) => {
  const spotifyApi = useSpotifyApi();
  return useQuery(['NEW_RELEASES', limit], () => getNewReleases(spotifyApi, limit));
};

export default useNewReleases;
