import { FC } from 'react';

import usePlaybackControls from '../../hooks/usePlaybackControls';
import ControlsSection from './ControlsSection';
import TitleSection from './TitleSection';
import { Detail, QueueTrackContainer } from './styles';

interface Props {
  index: number;
  track: QueuedTrack;
}

const QueueTrack: FC<Props> = ({ index, track }) => {
  const { skipTo } = usePlaybackControls();

  return (
    <QueueTrackContainer onDoubleClick={() => skipTo(index)}>
      <ControlsSection variant="queue" index={index} />
      <TitleSection variant="queue" track={track} />
      <Detail>{track.requester}</Detail>
    </QueueTrackContainer>
  );
};

export default QueueTrack;
