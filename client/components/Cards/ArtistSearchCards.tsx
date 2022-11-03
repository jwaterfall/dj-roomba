import { FC } from 'react';

import Card from '../Card';
import NavLink from '../NavLink';
import {
  Container, Link, Title, TopBar,
} from '../Section';
import { CardContainerRow } from './styles';

interface Props {
  artists: SpotifyApi.ArtistObjectFull[];
  query: string;
}

const ArtistSearchCards: FC<Props> = ({ artists, query }) => (
  <Container>
    <TopBar>
      <Title>Artists</Title>
      <NavLink href={`/search/artists/${query}`} passHref>
        <Link>see all</Link>
      </NavLink>
    </TopBar>
    <CardContainerRow>
      {artists.map((artist) => (
        <Card key={artist.id} variant="artist" artist={artist} />
      ))}
    </CardContainerRow>
  </Container>
);

export default ArtistSearchCards;
