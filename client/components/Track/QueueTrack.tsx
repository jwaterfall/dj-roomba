import Image from 'next/image';
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
      <Detail>
        <Image
          src={`https://cdn.discordapp.com/avatars/${track.requester.id}/${track.requester.avatar}.png`}
          width={20}
          height={20}
        />
        {track.requester.username}
      </Detail>
    </QueueTrackContainer>
  );
};

export default QueueTrack;
