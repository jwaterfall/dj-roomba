import { FC } from 'react';

import Card from '../Card';
import { Container } from '../Section';
import { CardContainer } from './styles';

interface Props {
  albums: SpotifyApi.AlbumObjectSimplified[];
}

const AlbumCards: FC<Props> = ({ albums }) => (
  <Container>
    <CardContainer>
      {albums.map((album) => (
        <Card key={album.id} variant="album" album={album} />
      ))}
    </CardContainer>
  </Container>
);

export default AlbumCards;
