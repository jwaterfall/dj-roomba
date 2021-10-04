import {FC} from 'react';
import numbro from 'numbro';

import {
  Banner,
  Details,
  Label,
  Title,
  Description,
  DescriptionItem,
} from './styles';

interface Props {
  likedSongs: SpotifyApi.SavedTrackObject[];
}

const LikedSongsBanner: FC<Props> = ({likedSongs}) => (
  <Banner>
    <Details>
      <Label>playlist</Label>
      <Title>liked songs</Title>
      <Description>
        {/* <DescriptionLink to={`/user/${playlist.owner.id}`}>
            {playlist.owner.display_name}
          </DescriptionLink> */}
        <DescriptionItem>{`${likedSongs.length} songs`}</DescriptionItem>
      </Description>
    </Details>
  </Banner>
);

export default LikedSongsBanner;
