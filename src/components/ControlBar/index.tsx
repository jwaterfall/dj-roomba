import {FC} from 'react';
import {usePlaybackContext} from '../../contexts/playback';

import {ReactComponent as Play} from '../../assets/icons/play.svg';
import {ReactComponent as Queue} from '../../assets/icons/queue.svg';

import {
  Container,
  CurrentTrackSection,
  Image,
  Details,
  TitleLink,
  Description,
  Artist,
} from './styles';
import useTrack from '../../queries/useTrack';

const ControlBar: FC = () => {
  const {currentTrack, queuedTracks} = usePlaybackContext();
  const {data: spotifyTrack} = useTrack(currentTrack?.spotifyId);
  console.log(currentTrack);

  const imageUrl = spotifyTrack?.album.images[0].url || currentTrack?.image;
  const name = spotifyTrack?.name || currentTrack?.title;

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
              <TitleLink as="a" href={currentTrack.url}>
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
    </Container>
  );
};

export default ControlBar;
