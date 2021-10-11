import {FC} from 'react';

import {Container, Image, Details, Title, Artists, Artist} from './styles';

interface StandardProps {
  variant: 'standard';
  track: SpotifyApi.TrackObjectSimplified;
  imageUrl?: string;
  hideArist?: boolean;
}

interface QueueProps {
  variant: 'queue';
  track: QueuedTrack;
}

type Props = StandardProps | QueueProps;

const TitleSection: FC<Props> = (props) => {
  if (props.variant === 'standard')
    return (
      <Container>
        {props.imageUrl && <Image src={props.imageUrl} />}
        <Details>
          <Title>{props.track.name}</Title>
          {!props.hideArist && (
            <Artists>
              {props.track.artists.map((artist, index) => (
                <span key={index}>
                  {index > 0 && ', '}
                  <Artist to={`/artist/${artist.id}`}>{artist.name}</Artist>
                </span>
              ))}
            </Artists>
          )}
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
