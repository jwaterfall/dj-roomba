import { FC } from 'react';

import useSticky from '../../hooks/useSticky';
import Track from '../Track';
import ControlsSection from './ControlsSection';
import {
  Background,
  BackgroundGradient,
  Content,
  Copyright,
  Copyrights,
  Header,
  SimpleHeaderRow,
} from './styles';

interface Props {
  album: SpotifyApi.AlbumObjectFull;
  tracks: SpotifyApi.TrackObjectSimplified[];
}

const AlbumTrackList: FC<Props> = ({ album, tracks }) => {
  const { isStuck, ref } = useSticky();

  return (
    <Background>
      <BackgroundGradient />
      <Content>
        <ControlsSection variant="album" albumId={album.id} />
        <SimpleHeaderRow ref={ref} isStuck={isStuck}>
          <Header>#</Header>
          <Header>title</Header>
          <Header>length</Header>
        </SimpleHeaderRow>

        {tracks.map((track, index) => (
          <Track variant="album" index={index + 1} key={track.id} track={track} />
        ))}
        <Copyrights>
          {album.copyrights.map((copyright, index) => (
            <Copyright key={index}>
              {copyright.type === 'C' && '© '}
              {copyright.type === 'P' && '℗ '}
              {copyright.text.replaceAll('©', '').replaceAll('℗', '')}
            </Copyright>
          ))}
        </Copyrights>
      </Content>
    </Background>
  );
};

export default AlbumTrackList;
