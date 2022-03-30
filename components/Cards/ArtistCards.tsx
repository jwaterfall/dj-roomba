import { FC } from 'react';

import Card from '../Card';
import { Container } from '../Section';
import { CardContainer } from './styles';

interface Props {
  artists: SpotifyApi.ArtistObjectFull[];
}

const ArtistCards: FC<Props> = ({ artists }) => (
  <Container>
    <CardContainer>
      {artists.map((artist) => (
        <Card key={artist.id} variant="artist" artist={artist} />
      ))}
    </CardContainer>
  </Container>
);

export default ArtistCards;
