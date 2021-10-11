import {FC} from 'react';
import {useAppSelector} from '../../redux/store';
import {selectPlayback} from '../../redux/slices/playbackSlice';

import {ReactComponent as Play} from '../../assets/icons/play.svg';
import {ReactComponent as Pause} from '../../assets/icons/pause.svg';
import {ReactComponent as PreviousTrack} from '../../assets/icons/previous-track.svg';
import {ReactComponent as NextTrack} from '../../assets/icons/next-track.svg';
import {ReactComponent as Shuffle} from '../../assets/icons/shuffle.svg';
import {ReactComponent as Queue} from '../../assets/icons/queue.svg';

import {
  Container,
  CurrentTrackSection,
  Image,
  Details,
  TitleLink,
  Description,
  ControlsSection,
  PlayButton,
  Repeat,
  JoinSection,
  JoinButton,
  RightSection,
  QueueLink,
} from './styles';
import usePlaybackControls from '../../hooks/usePlaybackControls';
import {useSocket} from '../../contexts/socket';
import {useHistory} from 'react-router-dom';

const ControlBar: FC = () => {
  const history = useHistory();
  const {socket} = useSocket();
  const {currentTrack, isPaused, isOnRepeat} = useAppSelector(selectPlayback);
  const {
    connect,
    togglePause,
    nextTrack,
    previousTrack,
    toggleRepeat,
    shuffle,
  } = usePlaybackControls();

  const imageUrl = currentTrack?.thumbnail;
  const name = currentTrack?.title;

  if (!socket) {
    return (
      <Container>
        <JoinSection>
          <JoinButton onClick={connect}>Connect</JoinButton>
        </JoinSection>
      </Container>
    );
  }

  return (
    <Container>
      {currentTrack && (
        <CurrentTrackSection>
          {imageUrl && <Image src={imageUrl} />}
          <Details>
            <TitleLink as="a" href={currentTrack.uri}>
              {name}
            </TitleLink>
            <Description>Playing from youtube</Description>
          </Details>
        </CurrentTrackSection>
      )}
      <ControlsSection>
        <Shuffle onClick={shuffle} />
        <PreviousTrack onClick={previousTrack} />

        <PlayButton onClick={togglePause}>
          {isPaused ? <Play /> : <Pause />}
        </PlayButton>
        <NextTrack onClick={nextTrack} />
        <Repeat onClick={toggleRepeat} isOnRepeat={isOnRepeat} />
      </ControlsSection>
      <RightSection>
        <QueueLink
          onClick={(e) => {
            if (history.location.pathname === '/queue') {
              history.goBack();
            }
          }}
          to={'/queue'}>
          <Queue />
        </QueueLink>
      </RightSection>
    </Container>
  );
};

export default ControlBar;
