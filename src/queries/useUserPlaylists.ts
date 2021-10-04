import {useQuery} from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';
import useSpotifyApi from '../hooks/useSpotifyApi';

const getUserPlaylists = async (spotifyApi: SpotifyWebApi) => {
  let playlists = [];
  for (let offset = 0; true; offset += 50) {
    const response = await spotifyApi.getUserPlaylists({limit: 50, offset});
    playlists.push(...response.body.items);
    if (!response.body.next) break;
  }

  return playlists;
};

const useUserPlaylists = () => {
  const spotifyApi = useSpotifyApi();
  return useQuery('USER_PLAYLISTS', () => getUserPlaylists(spotifyApi), {
    refetchInterval: 15000,
  });
};

export default useUserPlaylists;
