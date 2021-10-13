import {useQuery} from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';
import useSpotifyApi from '../hooks/useSpotifyApi';

const getArtist = async (spotifyApi: SpotifyWebApi, artistId: string) => {
  const result = await spotifyApi.getArtist(artistId);
  const artist = result.body;

  return artist;
};

const useArtist = (artistId: string) => {
  const spotifyApi = useSpotifyApi();
  return useQuery<SpotifyApi.SingleArtistResponse>(['ARTIST', artistId], () =>
    getArtist(spotifyApi, artistId),
  );
};

export default useArtist;
