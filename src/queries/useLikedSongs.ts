import {useInfiniteQuery} from 'react-query';
import SpotifyWebApi from 'spotify-web-api-node';
import useSpotifyApi from '../hooks/useSpotifyApi';

const getLikedSongs = async (
  spotifyApi: SpotifyWebApi,
  limit: number,
  page = 1,
) => {
  const response = await spotifyApi.getMySavedTracks({
    limit,
    offset: (page - 1) * limit,
  });

  const results = response.body.items;
  const totalPages = Math.ceil(response.body.total / limit);

  return {results, nextPage: page + 1, totalPages};
};

const useLikedSongs = (limit = 25) => {
  const spotifyApi = useSpotifyApi();
  return useInfiniteQuery<{
    results: SpotifyApi.SavedTrackObject[];
    nextPage: number;
    totalPages: number;
  }>(
    ['LIKED_SONGS', limit],
    ({pageParam}) => getLikedSongs(spotifyApi, limit, pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    },
  );
};

export default useLikedSongs;
