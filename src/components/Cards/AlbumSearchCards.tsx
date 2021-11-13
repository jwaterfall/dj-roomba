import { FC } from 'react';

import Card from '../Card';
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
      <Link to={`/search/albums/${query}`}>see all</Link>
    </TopBar>
    <CardContainerRow>
      {albums.map((album) => (
        <Card variant="album" album={album} />
      ))}
    </CardContainerRow>
  </Container>
);

export default AlbumSearchCards;
