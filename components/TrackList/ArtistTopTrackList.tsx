import { FC, useState } from 'react';

import useArtistTopTracks from '../../hooks/queries/useArtistTopTracks';
import { Title, TopBar } from '../Section';
import Track from '../Track';
import { Background, BackgroundGradient, Content, SeeMore } from './styles';

interface Props {
  artistId: string;
}

const ArtistTopTrackList: FC<Props> = ({ artistId }) => {
  const [seeMore, setSeeMore] = useState(false);
  const { data: tracks } = useArtistTopTracks(artistId);

  const handleSeeMore = () => {
    setSeeMore((oldValue) => !oldValue);
  };

  if (!tracks) return <></>;

  return (
    <Background>
      <BackgroundGradient />
      <Content>
        <TopBar>
          <Title>Popular</Title>
        </TopBar>
        {(seeMore ? tracks : tracks.slice(0, 5)).map((track, index) => (
          <Track
            variant="artistTopTracks"
            index={index + 1}
            key={track.id}
            track={track}
          />
        ))}
        <SeeMore onClick={handleSeeMore}>
          {seeMore ? 'see less' : 'see more'}
        </SeeMore>
      </Content>
    </Background>
  );
};

export default ArtistTopTrackList;
