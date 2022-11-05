import Image from 'next/image';
import { FC } from 'react';

import {
  Description,
  DescriptionItem,
  Details,
  DiscographyBanner,
  DiscographyImageContainer,
  DiscographyTitle,
} from './styles';

interface Props {
  album: SpotifyApi.AlbumObjectSimplified;
}

const DiscographyAlbumBanner: FC<Props> = ({ album }) => {
  const url = album.images[0]?.url ?? '/images/placeholder.png';
  const width = album.images[0]?.width ?? 50;
  const height = album.images[0]?.height ?? 50;

  return (
    <DiscographyBanner>
      <DiscographyImageContainer>
        <Image
          src={url}
          width={width}
          height={height}
          layout="responsive"
          priority
          alt="album"
        />
      </DiscographyImageContainer>
      <Details>
        <DiscographyTitle>{album.name}</DiscographyTitle>
        <Description>
          <DescriptionItem>{album.album_type}</DescriptionItem>
          <DescriptionItem>{`${album.total_tracks} songs`}</DescriptionItem>
        </Description>
      </Details>
    </DiscographyBanner>
  );
};

export default DiscographyAlbumBanner;
