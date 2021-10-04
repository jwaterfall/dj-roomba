import {useQuery} from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';
import useSpotifyApi from '../hooks/useSpotifyApi';

const getPlaylist = async (spotifyApi: SpotifyWebApi, playlistId: string) => {
  const result = await spotifyApi.getPlaylist(playlistId);
  const playlist = result.body;

  let tracks = [];
  for (let offset = 0; true; offset += 50) {
    const response = await spotifyApi.getPlaylistTracks(playlist.id, {
      limit: 50,
      offset,
    });
    tracks.push(...response.body.items);
    if (!response.body.next) break;
  }

  return {...playlist, tracks};
};

const usePlaylist = (playlistId: string) => {
  const spotifyApi = useSpotifyApi();
  return useQuery<Playlist>(['PLAYLIST', playlistId], () =>
    getPlaylist(spotifyApi, playlistId),
  );
};

export default usePlaylist;
