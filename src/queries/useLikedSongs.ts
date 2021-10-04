import {useQuery} from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';
import useSpotifyApi from '../hooks/useSpotifyApi';

const getLikedSongs = async (spotifyApi: SpotifyWebApi) => {
  let tracks = [];
  for (let offset = 0; true; offset += 50) {
    const response = await spotifyApi.getMySavedTracks({
      limit: 50,
      offset,
    });
    tracks.push(...response.body.items);
    if (!response.body.next) break;
  }

  return tracks;
};

const useLikedSongs = () => {
  const spotifyApi = useSpotifyApi();
  return useQuery<SpotifyApi.SavedTrackObject[]>('LIKED_SONGS', () =>
    getLikedSongs(spotifyApi),
  );
};

export default useLikedSongs;
