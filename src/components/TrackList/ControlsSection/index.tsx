import {FC} from 'react';
import usePlaybackControls from '../../../hooks/usePlaybackControls';

import {ReactComponent as Play} from '../../../assets/icons/play.svg';
import {ReactComponent as QueueAdd} from '../../../assets/icons/queue-add.svg';

import {Container} from './styles';

interface Props {
  tracks: SpotifyApi.TrackObjectSimplified[];
}

const ControlsSection: FC<Props> = ({tracks}) => {
  const {playTracks, queueTracks} = usePlaybackControls();

  return (
    <Container>
      <Play onClick={() => playTracks(tracks)} />
      <QueueAdd onClick={() => queueTracks(tracks)} />
    </Container>
  );
};

export default ControlsSection;
