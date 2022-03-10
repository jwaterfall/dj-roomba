import numbro from 'numbro';
import { FC } from 'react';

import placeholder from '../../images/placeholder.png';
import NavLink from '../NavLink';
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
  playlist: SpotifyApi.SinglePlaylistResponse;
}

const PlaylistBanner: FC<Props> = ({ playlist }) => {
  const imageUrl: string | undefined = playlist.images[0]?.url;
  return (
    <Banner>
      <Image src={imageUrl || placeholder} />
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
