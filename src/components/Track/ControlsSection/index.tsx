import {FC} from 'react';
import usePlaybackControls from '../../../hooks/usePlaybackControls';

import {ReactComponent as Play} from '../../../assets/icons/play.svg';
import {ReactComponent as QueueAdd} from '../../../assets/icons/queue-add.svg';

import {IconList, Index} from './styles';

interface Props {
  track: SpotifyApi.TrackObjectSimplified;
  index: number;
}

const ControlsSection: FC<Props> = ({track, index}) => {
  const {playTracks, queueTracks} = usePlaybackControls();

  return (
    <div>
      <IconList>
        <Play onClick={() => playTracks([track])} />
        <QueueAdd onClick={() => queueTracks([track])} />
      </IconList>
      <Index>{index}</Index>
    </div>
  );
};

export default ControlsSection;
