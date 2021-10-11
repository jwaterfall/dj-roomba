import {FC} from 'react';
import numbro from 'numbro';

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
  playlist: SpotifyApi.SinglePlaylistResponse;
}

const PlaylistBanner: FC<Props> = ({playlist}) => {
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
          <DescriptionLink to={`/user/${playlist.owner.id}`}>
            {playlist.owner.display_name}
          </DescriptionLink>
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
