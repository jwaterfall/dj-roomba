import { useQuery } from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';

import useSpotifyApi from '../hooks/useSpotifyApi';

const searchPlaylists = async (
  spotifyApi: SpotifyWebApi,
  query: string,
  limit: number,
) => {
  const result = await spotifyApi.searchPlaylists(query, { limit });
  const playlists = result.body.playlists?.items;

  return playlists;
};

const useSearchPlaylists = (query: string, limit: number) => {
  const spotifyApi = useSpotifyApi();
  return useQuery<SpotifyApi.PlaylistObjectSimplified[] | undefined>(
    ['SEARCH_PLAYLISTS', query, limit],
    () => searchPlaylists(spotifyApi, query, limit),
  );
};

export default useSearchPlaylists;
