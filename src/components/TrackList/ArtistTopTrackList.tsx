import {FC, useState} from 'react';
import Track from '../Track';
import useArtistTopTracks from '../../queries/useArtistTopTracks';

import {
  Background,
  BackgroundGradient,
  Content,
  SectionTitle,
  SeeMore,
} from './styles';

interface Props {
  artistId: string;
}

const ArtistTopTrackList: FC<Props> = ({artistId}) => {
  const [seeMore, setSeeMore] = useState(false);
  const {data: tracks} = useArtistTopTracks(artistId);

  const handleSeeMore = () => {
    setSeeMore((oldValue) => !oldValue);
  };

  if (!tracks) return <></>;

  return (
    <Background>
      <BackgroundGradient />
      <Content>
        <SectionTitle>Popular</SectionTitle>
        {(seeMore ? tracks : tracks.slice(0, 5)).map((track, index) => (
          <Track
            variant="artistTopTracks"
            index={index + 1}
            key={index}
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
