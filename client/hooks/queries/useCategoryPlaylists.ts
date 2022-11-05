import { useQuery } from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';

import useSpotifyApi from '../useSpotifyApi';

const getCategoryPlaylists = async (spotifyApi: SpotifyWebApi, categoryId: string) => {
  const playlists = [];
  for (let offset = 0; true; offset += 50) {
    const response = await spotifyApi.getPlaylistsForCategory(categoryId, { limit: 50, offset });
    playlists.push(...response.body.playlists.items);
    if (!response.body.playlists.next) break;
  }

  return playlists;
};

const useCategoryPlaylists = (categoryId: string) => {
  const spotifyApi = useSpotifyApi();
  return useQuery(
    ['CATEGORY_PLAYLISTS', categoryId],
    () => getCategoryPlaylists(spotifyApi, categoryId),
    {
      refetchInterval: 15000,
    },
  );
};

export default useCategoryPlaylists;
