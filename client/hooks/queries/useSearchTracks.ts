import { useQuery } from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';

import useSpotifyApi from '../useSpotifyApi';

const searchTracks = async (
  spotifyApi: SpotifyWebApi,
  query: string,
  limit: number,
) => {
  const result = await spotifyApi.searchTracks(query, { limit });
  const tracks = result.body.tracks?.items;

  return tracks;
};

const useSearchTracks = (query: string, limit: number) => {
  const spotifyApi = useSpotifyApi();
  return useQuery(
    ['SEARCH_TRACKS', query, limit],
    () => searchTracks(spotifyApi, query, limit),
  );
};

export default useSearchTracks;
