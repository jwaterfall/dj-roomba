import {useQuery} from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';
import useSpotifyApi from '../hooks/useSpotifyApi';

const getAlbumTracks = async (spotifyApi: SpotifyWebApi, albumId: string) => {
  let tracks = [];
  for (let offset = 0; true; offset += 50) {
    const response = await spotifyApi.getAlbumTracks(albumId, {
      limit: 50,
      offset,
    });
    tracks.push(...response.body.items);
    if (!response.body.next) break;
  }

  return tracks;
};

const useAlbumTracks = (albumId: string) => {
  const spotifyApi = useSpotifyApi();
  return useQuery<SpotifyApi.TrackObjectSimplified[]>(
    ['ALBUM_TRACKS', albumId],
    () => getAlbumTracks(spotifyApi, albumId),
  );
};

export default useAlbumTracks;
