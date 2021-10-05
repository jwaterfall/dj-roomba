import {FC} from 'react';
import {useAppSelector} from '../../redux/store';
import {selectPlayback} from '../../redux/slices/playbackSlice';

import {ReactComponent as Play} from '../../assets/icons/play.svg';
import {ReactComponent as Pause} from '../../assets/icons/pause.svg';
import {ReactComponent as PreviousTrack} from '../../assets/icons/previous-track.svg';
import {ReactComponent as NextTrack} from '../../assets/icons/next-track.svg';
import {ReactComponent as Shuffle} from '../../assets/icons/shuffle.svg';

import {
  Container,
  CurrentTrackSection,
  Image,
  Details,
  TitleLink,
  Description,
  Artist,
  ControlsSection,
  PlayButton,
  Repeat,
  JoinSection,
  JoinButton,
} from './styles';
import useTrack from '../../queries/useTrack';
import usePlaybackControls from '../../hooks/usePlaybackControls';
import {useSocket} from '../../contexts/socket';

const ControlBar: FC = () => {
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
  const {data: spotifyTrack} = useTrack(currentTrack?.spotifyId);

  const imageUrl = spotifyTrack?.album.images[0].url || currentTrack?.thumbnail;
  const name = spotifyTrack?.name || currentTrack?.title;

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
            {spotifyTrack ? (
              <TitleLink to={`/album/${spotifyTrack.album.id}`}>
                {name}
              </TitleLink>
            ) : (
              <TitleLink as="a" href={currentTrack.uri}>
                {name}
              </TitleLink>
            )}
            {spotifyTrack ? (
              <Description>
                {spotifyTrack.artists.map((artist, index) => (
                  <span key={index}>
                    {index > 0 && ', '}
                    <Artist to={`/artist/${artist.id}`}>{artist.name}</Artist>
                  </span>
                ))}
              </Description>
            ) : (
              <Description>Playing from youtube</Description>
            )}
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
    </Container>
  );
};

export default ControlBar;
