import { useQuery } from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';

import useSpotifyApi from '../hooks/useSpotifyApi';

const searchArtists = async (
  spotifyApi: SpotifyWebApi,
  query: string,
  limit: number,
) => {
  const result = await spotifyApi.searchArtists(query, { limit });
  const artists = result.body.artists?.items;

  return artists;
};

const useSearchArtists = (query: string, limit: number) => {
  const spotifyApi = useSpotifyApi();
  return useQuery<SpotifyApi.ArtistObjectFull[] | undefined>(
    ['SEARCH_ARTISTS', query, limit],
    () => searchArtists(spotifyApi, query, limit),
  );
};

export default useSearchArtists;
