import {FC} from 'react';
import {
  Banner,
  Image,
  Details,
  Label,
  Title,
  Description,
  DescriptionItem,
  DescriptionLink,
} from './styles';

import placeholder from '../../assets/images/placeholder.png';

interface Props {
  album: Album;
}

const AlbumBanner: FC<Props> = ({album}) => {
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

          <DescriptionItem>{`${album.tracks.length} songs`}</DescriptionItem>
        </Description>
      </Details>
    </Banner>
  );
};

export default AlbumBanner;
