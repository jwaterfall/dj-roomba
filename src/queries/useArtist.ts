import {useQuery} from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';
import useSpotifyApi from '../hooks/useSpotifyApi';

const getArtist = async (spotifyApi: SpotifyWebApi, artistId: string) => {
  const result = await spotifyApi.getArtist(artistId);
  const artist = result.body;

  const responseTopTracks = await spotifyApi.getArtistTopTracks(
    artist.id,
    'GB',
  );
  const topTracks = responseTopTracks.body.tracks;

  const responseTopAlbums = await spotifyApi.getArtistAlbums(artistId, {
    include_groups: 'album',
    limit: 10,
  });
  const topAlbums = responseTopAlbums.body.items;

  const responseTopSingles = await spotifyApi.getArtistAlbums(artistId, {
    include_groups: 'single',
    limit: 10,
  });
  const topSingles = responseTopSingles.body.items;

  return {...artist, topTracks, topAlbums, topSingles};
};

const useArtist = (artistId: string) => {
  const spotifyApi = useSpotifyApi();
  return useQuery<Artist>(['ARTIST', artistId], () =>
    getArtist(spotifyApi, artistId),
  );
};

export default useArtist;
