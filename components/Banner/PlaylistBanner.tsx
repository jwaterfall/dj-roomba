import Image from 'next/image';
import numbro from 'numbro';
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
  playlist: SpotifyApi.SinglePlaylistResponse;
}

const PlaylistBanner: FC<Props> = ({ playlist }) => {
  const url = playlist.images[0]?.url ?? '/images/placeholder.png';
  const width = playlist.images[0]?.width ?? 50;
  const height = playlist.images[0]?.height ?? 50;

  return (
    <Banner>
      <ImageContainer>
        <Image
          src={url}
          width={width}
          height={height}
          layout="responsive"
          priority={true}
          alt="album"
        />
      </ImageContainer>
      <Details>
        <Label>playlist</Label>
        <Title>{playlist.name}</Title>
        {playlist.description && (
          <Description>
            {playlist.description.replace(/<[^>]+>/g, '')}
          </Description>
        )}
        <Description>
          <NavLink href={`/user/${playlist.owner.id}`} passHref>
            <DescriptionLink>{playlist.owner.display_name}</DescriptionLink>
          </NavLink>
          <DescriptionItem>
            {`${numbro(playlist.followers.total).format({
              thousandSeparated: true,
            })} likes`}
          </DescriptionItem>
          <DescriptionItem>{`${playlist.tracks.total} songs`}</DescriptionItem>
        </Description>
      </Details>
    </Banner>
  );
};

export default PlaylistBanner;
