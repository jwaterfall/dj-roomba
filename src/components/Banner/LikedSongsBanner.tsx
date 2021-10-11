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

const LikedSongsBanner: FC = () => (
  <Banner>
    <Details>
      <Label>playlist</Label>
      <Title>liked songs</Title>
      <Description>
        {/* <DescriptionItem>{`${likedSongs.length} songs`}</DescriptionItem> */}
      </Description>
    </Details>
  </Banner>
);

export default LikedSongsBanner;
