import {useQuery} from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';
import useSpotifyApi from '../hooks/useSpotifyApi';

const getArtistAlbums = async (
  spotifyApi: SpotifyWebApi,
  artistId: string,
  limit = 10,
) => {
  const response = await spotifyApi.getArtistAlbums(artistId, {
    include_groups: 'album',
    limit,
  });
  const albums = response.body.items;

  return albums;
};

const useArtistAlbums = (artistId: string, limit = 10) => {
  const spotifyApi = useSpotifyApi();
  return useQuery<SpotifyApi.AlbumObjectSimplified[]>(
    ['ARTIST_ALBUMS', artistId],
    () => getArtistAlbums(spotifyApi, artistId, limit),
  );
};

export default useArtistAlbums;
