import { FC } from 'react';
import Card from '../Card';

import { CardContainer } from './styles';

interface Props {
  albums: SpotifyApi.AlbumObjectSimplified[];
}

const AlbumCards: FC<Props> = ({ albums }) => (
  <CardContainer>
    {albums.map((album) => (
      <Card variant="album" album={album} />
    ))}
  </CardContainer>
);

export default AlbumCards;
