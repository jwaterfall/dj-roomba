import { useQuery } from '@tanstack/react-query';
import SpotifyWebApi from 'spotify-web-api-node';
import useSpotifyApi from '../useSpotifyApi';

const getAlbum = async (spotifyApi: SpotifyWebApi, albumId: string) => {
  const result = await spotifyApi.getAlbum(albumId);
  const album = result.body;

  return album;
};

const useAlbum = (albumId: string) => {
  const spotifyApi = useSpotifyApi();
  return useQuery(['ALBUM', albumId], () => getAlbum(spotifyApi, albumId));
};

export default useAlbum;
