import { FC } from 'react';

import useTopTracks from '../../hooks/queries/useTopTracks';
import NavLink from '../NavLink';
import { Container, Link, Title, TopBar } from '../Section';
import Track from '../Track';

const TopTrackList: FC = () => {
  const { data: tracks } = useTopTracks();

  if (!tracks) return <></>;

  return (
    <Container>
      <TopBar>
        <Title>Top Tracks</Title>
        <NavLink href="/liked-songs" passHref>
          <Link>see all</Link>
        </NavLink>
      </TopBar>
      {tracks.map((track, index) => (
        <Track variant="top" index={index + 1} key={track.id} track={track} />
      ))}
    </Container>
  );
};

export default TopTrackList;
