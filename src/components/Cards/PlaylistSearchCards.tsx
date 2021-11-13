import { FC } from 'react';

import Card from '../Card';
import { Container, Link, Title, TopBar } from '../Section';
import { CardContainerRow } from './styles';

interface Props {
  playlists: SpotifyApi.PlaylistObjectSimplified[];
  query: string;
}

const PlaylistSearchCards: FC<Props> = ({ playlists, query }) => (
  <Container>
    <TopBar>
      <Title>Playlists</Title>
      <Link to={`/search/playlists/${query}`}>see all</Link>
    </TopBar>
    <CardContainerRow>
      {playlists.map((playlist) => (
        <Card variant="playlist" playlist={playlist} />
      ))}
    </CardContainerRow>
  </Container>
);

export default PlaylistSearchCards;
