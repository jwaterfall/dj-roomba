import {useQuery} from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';
import useSpotifyApi from '../hooks/useSpotifyApi';

const getArtistTopTracks = async (
  spotifyApi: SpotifyWebApi,
  artistId: string,
) => {
  const response = await spotifyApi.getArtistTopTracks(artistId, 'GB');
  const tracks = response.body.tracks;

  return tracks;
};

const useArtistTopTracks = (artistId: string) => {
  const spotifyApi = useSpotifyApi();
  return useQuery<SpotifyApi.TrackObjectFull[]>(
    ['ARTIST_TOP_TRACKS', artistId],
    () => getArtistTopTracks(spotifyApi, artistId),
  );
};

export default useArtistTopTracks;
