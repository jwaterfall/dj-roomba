import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { VideoSearchResult } from 'yt-search';

const searchYoutube = async (query: string) => {
  const result = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/search/youtube/${query}`);

  const videos = result.data;
  return videos;
};

const useSearchYoutube = (query: string) => useQuery<VideoSearchResult[]>(['SEARCH_YOUTUBE', query], () => searchYoutube(query));

export default useSearchYoutube;
