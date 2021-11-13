import { FC } from 'react';

import { Link, Title, TopBar } from '../Section';
import { Container } from '../Section';
import Track from '../Track';

interface Props {
  tracks: SpotifyApi.TrackObjectFull[];
  query: string;
}

const SearchTrackList: FC<Props> = ({ tracks, query }) => (
  <Container>
    <TopBar>
      <Title>Songs</Title>
      <Link to={`/search/tracks/${query}`}>see all</Link>
    </TopBar>
    {tracks.map((track, index) => (
      <Track variant="search" index={index + 1} track={track} />
    ))}
  </Container>
);

export default SearchTrackList;
