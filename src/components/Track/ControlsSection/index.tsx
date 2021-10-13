import {FC} from 'react';
import usePlaybackControls from '../../../hooks/usePlaybackControls';

import {ReactComponent as Play} from '../../../assets/icons/play.svg';
import {ReactComponent as QueueAdd} from '../../../assets/icons/queue-add.svg';
import {ReactComponent as Remove} from '../../../assets/icons/remove.svg';

import {IconList, Index} from './styles';

interface StandardProps {
  variant: 'standard';
  track: SpotifyApi.TrackObjectSimplified;
  index: number;
}

interface QueueProps {
  variant: 'queue';
  index: number;
}

type Props = StandardProps | QueueProps;

const ControlsSection: FC<Props> = (props) => {
  const {playTrack, skipTo, remove} = usePlaybackControls();

  if (props.variant === 'standard') {
    return (
      <div>
        <IconList>
          <Play onClick={() => playTrack(props.track.id)} />
          <QueueAdd onClick={() => playTrack(props.track.id, true)} />
        </IconList>
        <Index>{props.index}</Index>
      </div>
    );
  }

  if (props.variant === 'queue') {
    return (
      <div>
        <IconList>
          <Play onClick={() => skipTo(props.index)} />
          <Remove onClick={() => remove(props.index)} />
        </IconList>
        <Index>{props.index}</Index>
      </div>
    );
  }

  return <></>;
};

export default ControlsSection;
