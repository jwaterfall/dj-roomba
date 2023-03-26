import { useQuery } from '@tanstack/react-query';
import SpotifyWebApi from 'spotify-web-api-node';

import useSpotifyApi from '../useSpotifyApi';

const getArtistAlbums = async (spotifyApi: SpotifyWebApi, artistId: string, limit: number) => {
  const response = await spotifyApi.getArtistAlbums(artistId, {
    include_groups: 'album',
    country: 'GB',
    limit,
  });
  const albums = response.body.items;

  return albums;
};

const useArtistAlbums = (artistId: string, limit = 10) => {
  const spotifyApi = useSpotifyApi();
  return useQuery(['ARTIST_ALBUMS', artistId, limit], () => getArtistAlbums(spotifyApi, artistId, limit));
};

export default useArtistAlbums;
