import { useQuery } from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';

import useSpotifyApi from '../useSpotifyApi';

const getFollowedArtists = async (spotifyApi: SpotifyWebApi) => {
  let artists = [];
  let after: number | undefined = undefined;
  while (true) {
    const response = await spotifyApi.getFollowedArtists({ limit: 50, after });
    artists.push(...response.body.artists.items);

    const newAfter = response.body.artists.cursors.after;

    if (newAfter) {
      after = newAfter as unknown as number;
    } else {
      break;
    }
  }

  return artists.sort((artist1, artist2) => {
    const artist1Name = artist1.name.replace(/^THE /i, '').toLowerCase();
    const artist2Name = artist2.name.replace(/^THE /i, '').toLowerCase();

    if (artist1Name === artist2Name) return 0;
    return artist1Name > artist2Name ? 1 : -1;
  });
};

const useFollowedArtists = () => {
  const spotifyApi = useSpotifyApi();
  return useQuery('FOLLOWED_ARTISTS', () => getFollowedArtists(spotifyApi), {
    refetchInterval: 15000,
  });
};

export default useFollowedArtists;
