import {useQuery} from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';
import useSpotifyApi from '../hooks/useSpotifyApi';

const getAlbum = async (spotifyApi: SpotifyWebApi, albumId: string) => {
  const result = await spotifyApi.getAlbum(albumId);
  const album = result.body;

  let tracks = [];
  for (let offset = 0; true; offset += 50) {
    const response = await spotifyApi.getAlbumTracks(album.id, {
      limit: 50,
      offset,
    });
    tracks.push(...response.body.items);
    if (!response.body.next) break;
  }

  return {...album, tracks};
};

const useAlbum = (albumId: string) => {
  const spotifyApi = useSpotifyApi();
  return useQuery<Album>(['ALBUM', albumId], () =>
    getAlbum(spotifyApi, albumId),
  );
};

export default useAlbum;
