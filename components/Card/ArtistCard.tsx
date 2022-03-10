import Image from 'next/image';
import { FC } from 'react';

import NavLink from '../NavLink';
import { Card, Description, ImageContainerCircular, Title } from './styles';

interface Props {
  artist: SpotifyApi.ArtistObjectFull;
}

const ArtistCard: FC<Props> = ({ artist }) => {
  const url = artist.images[0]?.url ?? '/images/placeholder.png';
  const width = artist.images[0]?.width ?? 50;
  const height = artist.images[0]?.height ?? 50;

  return (
    <NavLink href={`/artists/${artist.id}`} passHref>
      <Card>
        <ImageContainerCircular>
          <Image
            src={url}
            width={width}
            height={height}
            layout="responsive"
            priority={true}
            alt="artist"
          />
        </ImageContainerCircular>
        <Title>{artist.name}</Title>
        <Description>Artist</Description>
      </Card>
    </NavLink>
  );
};

export default ArtistCard;
