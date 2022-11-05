import { FC } from 'react';

import useSticky from '../../hooks/useSticky';
import Track from '../Track';
import {
  Background, BackgroundGradient, Content, Header, QueueHeaderRow,
} from './styles';

interface Props {
  tracks: QueuedTrack[];
}

const QueueTrackList: FC<Props> = ({ tracks }) => {
  const { isStuck, ref } = useSticky();

  return (
    <Background>
      <BackgroundGradient />
      <Content>
        <QueueHeaderRow ref={ref} isStuck={isStuck}>
          <Header>#</Header>
          <Header>title</Header>
          <Header>added by</Header>
        </QueueHeaderRow>
        {tracks.map((track, index) => (
          <Track variant="queue" index={index + 1} key={track.uri} track={track} />
        ))}
      </Content>
    </Background>
  );
};

export default QueueTrackList;
