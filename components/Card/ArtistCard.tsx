import { FC } from 'react';

import placeholder from '../../images/placeholder.png';
import NavLink from '../NavLink';
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
    <NavLink href={`/artists/${artist.id}`} passHref>
      <Card>
        <ImageContainer>
          <ImageCircular src={imageUrl || placeholder} />
        </ImageContainer>
        <Title>{artist.name}</Title>
        <Description>Artist</Description>
      </Card>
    </NavLink>
  );
};

export default ArtistCard;
