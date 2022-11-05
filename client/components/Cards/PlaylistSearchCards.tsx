import { FC } from 'react';

import Card from '../Card';
import NavLink from '../NavLink';
import {
  Container, Link, Title, TopBar,
} from '../Section';
import { CardContainerRow } from './styles';

interface Props {
  playlists: SpotifyApi.PlaylistObjectSimplified[];
  query: string;
}

const PlaylistSearchCards: FC<Props> = ({ playlists, query }) => (
  <Container>
    <TopBar>
      <Title>Playlists</Title>
      <NavLink href={`/search/playlists/${query}`} passHref>
        <Link>see all</Link>
      </NavLink>
    </TopBar>
    <CardContainerRow>
      {playlists.map((playlist) => (
        <Card key={playlist.id} variant="playlist" playlist={playlist} />
      ))}
    </CardContainerRow>
  </Container>
);

export default PlaylistSearchCards;
