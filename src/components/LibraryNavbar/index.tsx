import { FC } from 'react';

import { Container, Link } from './styles';

const LibraryNavbar: FC = () => (
  <Container>
    <Link to="/library/playlists">playlists</Link>
    <Link to="/library/artists">artists</Link>
    <Link to="/library/albums">albums</Link>
  </Container>
);

export default LibraryNavbar;
