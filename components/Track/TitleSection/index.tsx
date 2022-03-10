import Image from 'next/image';
import { FC } from 'react';
import { VideoSearchResult } from 'yt-search';

import NavLink from '../../NavLink';
import {
  Artist,
  Artists,
  Container,
  Details,
  ImageContainer,
  Title,
} from './styles';

interface StandardProps {
  variant: 'standard';
  track: SpotifyApi.TrackObjectSimplified;
  image?: { url: string; width: number; height: number };
  hideArist?: boolean;
}

interface YoutubeProps {
  variant: 'youtube';
  video: VideoSearchResult;
}

interface QueueProps {
  variant: 'queue';
  track: QueuedTrack;
}

type Props = StandardProps | YoutubeProps | QueueProps;

const TitleSection: FC<Props> = (props) => {
  if (props.variant === 'standard')
    return (
      <Container>
        {props.image && (
          <ImageContainer>
            <Image
              src={props.image.url}
              width={props.image.width}
              height={props.image.height}
              layout="responsive"
              priority={true}
              alt="track"
            />
          </ImageContainer>
        )}
        <Details>
          <Title>{props.track.name}</Title>
          {!props.hideArist && (
            <Artists>
              {props.track.artists.map((artist, index) => (
                <span key={index}>
                  {index > 0 && ', '}
                  <NavLink href={`/artists/${artist.id}`} passHref>
                    <Artist>{artist.name}</Artist>
                  </NavLink>
                </span>
              ))}
            </Artists>
          )}
        </Details>
      </Container>
    );

  if (props.variant === 'youtube')
    return (
      <Container>
        <ImageContainer>
          <Image
            src={props.video.thumbnail}
            width={50}
            height={50}
            layout="responsive"
            alt="track"
          />
        </ImageContainer>
        <Details>
          <Title>{props.video.title}</Title>
        </Details>
      </Container>
    );

  if (props.variant === 'queue')
    return (
      <Container>
        <Details>
          <Title>{props.track.title}</Title>
          <Artists>{props.track.author}</Artists>
        </Details>
      </Container>
    );

  return <></>;
};

export default TitleSection;
