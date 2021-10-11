import {useQuery} from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';
import useSpotifyApi from '../hooks/useSpotifyApi';

const getPlaylist = async (spotifyApi: SpotifyWebApi, playlistId: string) => {
  const result = await spotifyApi.getPlaylist(playlistId);
  const playlist = result.body;

  return playlist;
};

const usePlaylist = (playlistId: string) => {
  const spotifyApi = useSpotifyApi();
  return useQuery<SpotifyApi.SinglePlaylistResponse>(
    ['PLAYLIST', playlistId],
    () => getPlaylist(spotifyApi, playlistId),
  );
};

export default usePlaylist;
