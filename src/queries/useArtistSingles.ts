import {useQuery} from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';
import useSpotifyApi from '../hooks/useSpotifyApi';

const getArtistSingles = async (
  spotifyApi: SpotifyWebApi,
  artistId: string,
  limit = 10,
) => {
  const response = await spotifyApi.getArtistAlbums(artistId, {
    include_groups: 'single',
    country: 'GB',
    limit,
  });
  const singles = response.body.items;

  return singles;
};

const useArtistSingles = (artistId: string, limit = 10) => {
  const spotifyApi = useSpotifyApi();
  return useQuery<SpotifyApi.AlbumObjectSimplified[]>(
    ['ARTIST_SINGLES', artistId, limit],
    () => getArtistSingles(spotifyApi, artistId, limit),
  );
};

export default useArtistSingles;
