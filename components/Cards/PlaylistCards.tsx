import { FC } from 'react';
import Card from '../Card';

import { CardContainer } from './styles';

interface Props {
  playlists: SpotifyApi.PlaylistObjectSimplified[];
}

const PlaylistCards: FC<Props> = ({ playlists }) => (
  <CardContainer>
    {playlists.map((playlist) => (
      <Card variant="playlist" playlist={playlist} />
    ))}
  </CardContainer>
);

export default PlaylistCards;
