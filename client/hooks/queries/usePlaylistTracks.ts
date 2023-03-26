import { useInfiniteQuery } from '@tanstack/react-query';
import SpotifyWebApi from 'spotify-web-api-node';
import useSpotifyApi from '../useSpotifyApi';

const getPlaylistTracks = async (spotifyApi: SpotifyWebApi, playlistId: string, limit: number, page = 1) => {
  const response = await spotifyApi.getPlaylistTracks(playlistId, {
    limit,
    offset: (page - 1) * limit,
  });

  const results = response.body.items;
  const totalPages = Math.ceil(response.body.total / limit);

  return { results, nextPage: page + 1, totalPages };
};

const usePlaylistTracks = (playlistId: string, limit = 25) => {
  const spotifyApi = useSpotifyApi();
  return useInfiniteQuery<{
    results: SpotifyApi.PlaylistTrackObject[];
    nextPage: number;
    totalPages: number;
  }>(['PLAYLIST_TRACKS', playlistId, limit], ({ pageParam }) => getPlaylistTracks(spotifyApi, playlistId, limit, pageParam), {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
  });
};

export default usePlaylistTracks;
