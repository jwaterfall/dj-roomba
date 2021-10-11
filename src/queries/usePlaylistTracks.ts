import {useQuery} from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';
import useSpotifyApi from '../hooks/useSpotifyApi';

const getPlaylistTracks = async (
  spotifyApi: SpotifyWebApi,
  playlistId: string,
) => {
  let tracks = [];
  for (let offset = 0; true; offset += 50) {
    const response = await spotifyApi.getPlaylistTracks(playlistId, {
      limit: 50,
      offset,
    });
    tracks.push(...response.body.items);
    if (!response.body.next) break;
  }

  return tracks;
};

const usePlaylistTracks = (playlistId: string) => {
  const spotifyApi = useSpotifyApi();
  return useQuery<SpotifyApi.PlaylistTrackObject[]>(
    ['PLAYLIST_TRACKS', playlistId],
    () => getPlaylistTracks(spotifyApi, playlistId),
  );
};

export default usePlaylistTracks;
