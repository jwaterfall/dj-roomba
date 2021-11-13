import { FC } from 'react';
import { VideoSearchResult } from 'yt-search';

import { Link, Title, TopBar } from '../Section';
import { Container } from '../Section';
import Track from '../Track';

interface Props {
  videos: VideoSearchResult[];
  query: string;
}

const YoutubeSearchTrackList: FC<Props> = ({ videos, query }) => (
  <Container>
    <TopBar>
      <Title>Youtube</Title>
      <Link to={`/search/youtube/${query}`}>see all</Link>
    </TopBar>
    {videos.map((video, index) => (
      <Track variant="youtubeSearch" index={index + 1} video={video} />
    ))}
  </Container>
);

export default YoutubeSearchTrackList;
