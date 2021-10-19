import {useQuery} from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';
import useSpotifyApi from '../hooks/useSpotifyApi';

const getUserAlbums = async (spotifyApi: SpotifyWebApi) => {
  let albums = [];
  for (let offset = 0; true; offset += 50) {
    const response = await spotifyApi.getMySavedAlbums({limit: 50, offset});
    albums.push(...response.body.items);
    if (!response.body.next) break;
  }

  return albums;
};

const useUserAlbums = () => {
  const spotifyApi = useSpotifyApi();
  return useQuery('USER_ALBUMS', () => getUserAlbums(spotifyApi), {
    refetchInterval: 15000,
  });
};

export default useUserAlbums;
