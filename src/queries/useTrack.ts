import {useQuery} from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';
import useSpotifyApi from '../hooks/useSpotifyApi';

const getTrack = async (spotifyApi: SpotifyWebApi, trackId?: string) => {
  if (!trackId) return undefined;
  const result = await spotifyApi.getTrack(trackId);
  const track = result.body;

  return track;
};

const useTrack = (trackId?: string) => {
  const spotifyApi = useSpotifyApi();
  return useQuery<SpotifyApi.SingleTrackResponse | undefined>(
    ['TRACK', trackId],
    () => getTrack(spotifyApi, trackId),
  );
};

export default useTrack;
