import { FC } from 'react';

import Card from '../Card';
import { Container, Link, Title, TopBar } from '../Section';
import { CardContainerRow } from './styles';

interface Props {
  artists: SpotifyApi.ArtistObjectFull[];
  query: string;
}

const ArtistSearchCards: FC<Props> = ({ artists, query }) => (
  <Container>
    <TopBar>
      <Title>Artists</Title>
      <Link to={`/search/artists/${query}`}>see all</Link>
    </TopBar>
    <CardContainerRow>
      {artists.map((artist) => (
        <Card variant="artist" artist={artist} />
      ))}
    </CardContainerRow>
  </Container>
);

export default ArtistSearchCards;
