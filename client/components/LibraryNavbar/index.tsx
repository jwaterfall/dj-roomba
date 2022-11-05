import { FC } from 'react';

import NavLink from '../NavLink';
import { Container, Link } from './styles';

const LibraryNavbar: FC = () => (
  <Container>
    <NavLink href="/library/playlists" passHref>
      <Link>playlists</Link>
    </NavLink>
    <NavLink href="/library/artists" passHref>
      <Link>artists</Link>
    </NavLink>
    <NavLink href="/library/albums" passHref>
      <Link>albums</Link>
    </NavLink>
  </Container>
);

export default LibraryNavbar;
