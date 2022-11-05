import { FC } from 'react';

import useAlbumTracks from '../../hooks/queries/useAlbumTracks';
import useSticky from '../../hooks/useSticky';
import Banner from '../Banner';
import Track from '../Track';
import ControlsSection from './ControlsSection';
import {
  Background,
  BackgroundGradient,
  Content,
  Header,
  SimpleHeaderRow,
} from './styles';

interface Props {
  album: SpotifyApi.AlbumObjectSimplified;
}

const DiscographyAlbumTrackList: FC<Props> = ({ album }) => {
  const { isStuck, ref } = useSticky();
  const { data: tracks } = useAlbumTracks(album.id);

  if (!tracks) return <></>;

  return (
    <Background>
      <BackgroundGradient />
      <Content>
        <Banner variant="discographyAlbum" album={album} />
        <ControlsSection variant="album" albumId={album.id} />
        <SimpleHeaderRow ref={ref} isStuck={isStuck}>
          <Header>#</Header>
          <Header>title</Header>
          <Header>length</Header>
        </SimpleHeaderRow>
        {tracks.map((track, index) => (
          <Track
            variant="album"
            index={index + 1}
            key={track.id}
            track={track}
          />
        ))}
      </Content>
    </Background>
  );
};

export default DiscographyAlbumTrackList;
