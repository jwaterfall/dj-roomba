import { FC } from 'react';

import placeholder from '../../assets/images/placeholder.png';
import {
  Banner,
  Description,
  DescriptionItem,
  DescriptionLink,
  Details,
  Image,
  Label,
  Title,
} from './styles';

interface Props {
  album: SpotifyApi.SingleAlbumResponse;
}

const AlbumBanner: FC<Props> = ({ album }) => {
  const imageUrl: string | undefined = album.images[0]?.url;

  return (
    <Banner>
      <Image src={imageUrl || placeholder} />
      <Details>
        <Label>{album.album_type}</Label>
        <Title>{album.name}</Title>
        <Description>
          {album.artists.map((artist, i) => (
            <>
              {i !== 0 && <span>, </span>}
              <DescriptionLink to={`/artist/${artist.id}`}>
                {artist.name}
              </DescriptionLink>
            </>
          ))}

          <DescriptionItem>{`${album.tracks.total} songs`}</DescriptionItem>
        </Description>
      </Details>
    </Banner>
  );
};

export default AlbumBanner;
