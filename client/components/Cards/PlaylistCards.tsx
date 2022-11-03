import { FC } from 'react';

import Card from '../Card';
import { Container } from '../Section';
import { CardContainer } from './styles';

interface Props {
  playlists: SpotifyApi.PlaylistObjectSimplified[];
}

const PlaylistCards: FC<Props> = ({ playlists }) => (
  <Container>
    <CardContainer>
      {playlists.map((playlist) => (
        <Card key={playlist.id} variant="playlist" playlist={playlist} />
      ))}
    </CardContainer>
  </Container>
);

export default PlaylistCards;
