import { FC } from 'react';

import Card from '../Card';
import { CardContainer } from './styles';

interface Props {
  artists: SpotifyApi.ArtistObjectFull[];
}

const ArtistCards: FC<Props> = ({ artists }) => (
  <CardContainer>
    {artists.map((artist) => (
      <Card key={artist.id} variant="artist" artist={artist} />
    ))}
  </CardContainer>
);

export default ArtistCards;
