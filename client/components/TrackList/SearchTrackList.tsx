import { FC } from 'react';

import NavLink from '../NavLink';
import {
  Container, Link, Title, TopBar,
} from '../Section';
import Track from '../Track';

interface Props {
  tracks: SpotifyApi.TrackObjectFull[];
  query: string;
}

const SearchTrackList: FC<Props> = ({ tracks, query }) => (
  <Container>
    <TopBar>
      <Title>Songs</Title>
      <NavLink href={`/search/tracks/${query}`} passHref>
        <Link>see all</Link>
      </NavLink>
    </TopBar>
    {tracks.map((track, index) => (
      <Track key={track.id} variant="search" index={index + 1} track={track} />
    ))}
  </Container>
);

export default SearchTrackList;
