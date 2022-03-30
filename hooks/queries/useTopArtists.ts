import { useQuery } from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';

import useSpotifyApi from '../useSpotifyApi';

const getTopArtists = async (spotifyApi: SpotifyWebApi, limit: number) => {
  const response = await spotifyApi.getMyTopArtists({ limit });
  const artists = response.body.items;

  return artists;
};

const useTopArtists = (limit = 10) => {
  const spotifyApi = useSpotifyApi();
  return useQuery<SpotifyApi.ArtistObjectFull[]>(['TOP_ARTISTS', limit], () =>
    getTopArtists(spotifyApi, limit),
  );
};

export default useTopArtists;
