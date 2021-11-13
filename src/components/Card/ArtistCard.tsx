import { FC } from 'react';

import placeholder from '../../assets/images/placeholder.png';
import {
  Card,
  Description,
  ImageCircular,
  ImageContainer,
  Title,
} from './styles';

interface Props {
  artist: SpotifyApi.ArtistObjectFull;
}

const ArtistCard: FC<Props> = ({ artist }) => {
  const imageUrl: string | undefined = artist.images[0]?.url;

  return (
    <Card to={`/artist/${artist.id}`}>
      <ImageContainer>
        <ImageCircular src={imageUrl || placeholder} />
      </ImageContainer>
      <Title>{artist.name}</Title>
      <Description>Artist</Description>
    </Card>
  );
};

export default ArtistCard;
