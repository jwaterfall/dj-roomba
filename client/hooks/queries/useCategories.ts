import { useQuery } from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';

import useSpotifyApi from '../useSpotifyApi';

const getCategories = async (spotifyApi: SpotifyWebApi) => {
  const categories = [];
  for (let offset = 0; true; offset += 50) {
    const response = await spotifyApi.getCategories({ limit: 50, offset });
    categories.push(...response.body.categories.items);
    if (!response.body.categories.next) break;
  }

  return categories;
};

const useCategories = () => {
  const spotifyApi = useSpotifyApi();
  return useQuery('CATEGORIES', () => getCategories(spotifyApi));
};

export default useCategories;
