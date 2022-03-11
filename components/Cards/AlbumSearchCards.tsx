import { FC } from 'react';

import Card from '../Card';
import NavLink from '../NavLink';
import { Container, Link, Title, TopBar } from '../Section';
import { CardContainerRow } from './styles';

interface Props {
  albums: SpotifyApi.AlbumObjectSimplified[];
  query: string;
}

const AlbumSearchCards: FC<Props> = ({ albums, query }) => (
  <Container>
    <TopBar>
      <Title>Albums</Title>
      <NavLink href={`/search/albums/${query}`} passHref>
        <Link>see all</Link>
      </NavLink>
    </TopBar>
    <CardContainerRow>
      {albums.map((album) => (
        <Card key={album.id} variant="album" album={album} />
      ))}
    </CardContainerRow>
  </Container>
);

export default AlbumSearchCards;
