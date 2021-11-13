import { FC } from 'react';

import { Title, TopBar } from '../Section';
import { Container } from '../Section';
import Track from '../Track';

interface Props {
  tracks: SpotifyApi.TrackObjectFull[];
}

const SearchTrackList: FC<Props> = ({ tracks }) => (
  <Container>
    <TopBar>
      <Title>Popular</Title>
    </TopBar>
    {tracks.map((track, index) => (
      <Track variant="search" index={index + 1} track={track} />
    ))}
  </Container>
);

export default SearchTrackList;
