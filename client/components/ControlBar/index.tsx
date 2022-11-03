import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import {
  MdPause,
  MdPlayArrow,
  MdQueueMusic,
  MdRepeat,
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious,
} from 'react-icons/md';

import { useSocket } from '../../contexts/socket';
import usePlaybackControls from '../../hooks/usePlaybackControls';
import { selectPlayback } from '../../redux/slices/playbackSlice';
import { useAppSelector } from '../../redux/store';
import NavLink from '../NavLink';
import {
  Container,
  ControlsSection,
  CurrentTrackSection,
  Description,
  Details,
  ImageContainer,
  JoinButton,
  JoinSection,
  PlayButton,
  QueueLink,
  Repeat,
  RightSection,
  TitleLink,
} from './styles';

const ControlBar: FC = () => {
  const { back, asPath: currentPath } = useRouter();
  const { socket } = useSocket();
  const { currentTrack, isPaused, isOnRepeat } = useAppSelector(selectPlayback);
  const {
    connect,
    togglePause,
    nextTrack,
    previousTrack,
    toggleRepeat,
    shuffle,
  } = usePlaybackControls();

  const url = currentTrack?.thumbnail ?? '/images/placeholder.png';
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
          <ImageContainer>
            <Image
              src={url}
              width={50}
              height={50}
              layout="responsive"
              priority
              alt="album"
            />
          </ImageContainer>
          <Details>
            <TitleLink href={currentTrack.uri}>{name}</TitleLink>
            <Description>Playing from youtube</Description>
          </Details>
        </CurrentTrackSection>
      )}
      <ControlsSection>
        <MdShuffle onClick={shuffle} />
        <MdSkipPrevious onClick={previousTrack} />

        <PlayButton onClick={togglePause}>
          {isPaused ? <MdPlayArrow /> : <MdPause />}
        </PlayButton>
        <MdSkipNext onClick={nextTrack} />
        <Repeat onClick={toggleRepeat} isOnRepeat={isOnRepeat}>
          <MdRepeat />
        </Repeat>
      </ControlsSection>
      <RightSection>
        <NavLink href="/queue" passHref>
          <QueueLink
            onClick={(e) => {
              if (currentPath === '/queue') {
                back();
              }
            }}
          >
            <MdQueueMusic />
          </QueueLink>
        </NavLink>
      </RightSection>
    </Container>
  );
};

export default ControlBar;
