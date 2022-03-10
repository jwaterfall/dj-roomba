import { FC } from 'react';
import { VideoSearchResult } from 'yt-search';

import NavLink from '../NavLink';
import { Container, Link, Title, TopBar } from '../Section';
import Track from '../Track';

interface Props {
  videos: VideoSearchResult[];
  query: string;
}

const YoutubeSearchTrackList: FC<Props> = ({ videos, query }) => (
  <Container>
    <TopBar>
      <Title>Youtube</Title>
      <NavLink href={`/search/youtube/${query}`} passHref>
        <Link>see all</Link>
      </NavLink>
    </TopBar>
    {videos.map((video, index) => (
      <Track variant="youtubeSearch" index={index + 1} video={video} />
    ))}
  </Container>
);

export default YoutubeSearchTrackList;
