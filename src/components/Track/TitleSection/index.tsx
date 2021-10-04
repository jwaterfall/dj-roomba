import {FC} from 'react';

import {Container, Image, Details, Title, Artists, Artist} from './styles';

interface Props {
  track: SpotifyApi.TrackObjectSimplified;
  imageUrl?: string;
  hideArist?: boolean;
}

const TitleSection: FC<Props> = ({track, imageUrl, hideArist}) => (
  <Container>
    {imageUrl && <Image src={imageUrl} />}
    <Details>
      <Title>{track.name}</Title>
      {!hideArist && (
        <Artists>
          {track.artists.map((artist, index) => (
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

export default TitleSection;
