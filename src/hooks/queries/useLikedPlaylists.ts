import { useQuery } from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';

import useSpotifyApi from '../useSpotifyApi';

const getLikedPlaylists = async (spotifyApi: SpotifyWebApi) => {
  let playlists = [];
  for (let offset = 0; true; offset += 50) {
    const response = await spotifyApi.getUserPlaylists({ limit: 50, offset });
    playlists.push(...response.body.items);
    if (!response.body.next) break;
  }

  return playlists;
};

const useLikedPlaylists = () => {
  const spotifyApi = useSpotifyApi();
  return useQuery('LIKED_PLAYLISTS', () => getLikedPlaylists(spotifyApi), {
    refetchInterval: 15000,
  });
};

export default useLikedPlaylists;
