import { useQuery } from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';

import useSpotifyApi from '../hooks/useSpotifyApi';

const searchAlbums = async (
  spotifyApi: SpotifyWebApi,
  query: string,
  limit: number,
) => {
  const result = await spotifyApi.searchAlbums(query, { limit });
  const albums = result.body.albums?.items;

  return albums;
};

const useSearchAlbums = (query: string, limit: number) => {
  const spotifyApi = useSpotifyApi();
  return useQuery<SpotifyApi.AlbumObjectSimplified[] | undefined>(
    ['SEARCH_ALBUMS', query, limit],
    () => searchAlbums(spotifyApi, query, limit),
  );
};

export default useSearchAlbums;
