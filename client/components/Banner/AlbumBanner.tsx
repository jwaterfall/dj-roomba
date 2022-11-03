import Image from 'next/image';
import { FC } from 'react';

import NavLink from '../NavLink';
import {
  Banner,
  Description,
  DescriptionItem,
  DescriptionLink,
  Details,
  ImageContainer,
  Label,
  Title,
} from './styles';

interface Props {
  album: SpotifyApi.AlbumObjectSimplified;
}

const AlbumBanner: FC<Props> = ({ album }) => {
  const url = album.images[0]?.url ?? '/images/placeholder.png';
  const width = album.images[0]?.width ?? 50;
  const height = album.images[0]?.height ?? 50;

  return (
    <Banner>
      <ImageContainer>
        <Image
          src={url}
          width={width}
          height={height}
          layout="responsive"
          priority
          alt="album"
        />
      </ImageContainer>
      <Details>
        <Label>{album.album_type}</Label>
        <Title>{album.name}</Title>
        <Description>
          {album.artists.map((artist, i) => (
            <>
              {i !== 0 && <span>, </span>}
              <NavLink href={`/artists/${artist.id}`} passHref>
                <DescriptionLink>{artist.name}</DescriptionLink>
              </NavLink>
            </>
          ))}

          <DescriptionItem>{`${album.total_tracks} songs`}</DescriptionItem>
        </Description>
      </Details>
    </Banner>
  );
};

export default AlbumBanner;
