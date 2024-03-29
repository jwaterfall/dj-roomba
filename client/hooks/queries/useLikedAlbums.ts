import { useQuery } from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';

import useSpotifyApi from '../useSpotifyApi';

const getLikedAlbums = async (spotifyApi: SpotifyWebApi) => {
  const albums = [];
  for (let offset = 0; true; offset += 50) {
    const response = await spotifyApi.getMySavedAlbums({ limit: 50, offset });
    albums.push(...response.body.items);
    if (!response.body.next) break;
  }

  return albums;
};

const useLikedAlbums = () => {
  const spotifyApi = useSpotifyApi();
  return useQuery('LIKED_ALBUMS', () => getLikedAlbums(spotifyApi), {
    refetchInterval: 15000,
  });
};

export default useLikedAlbums;
