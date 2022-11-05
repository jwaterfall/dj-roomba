import { FC } from 'react';
import numbro from 'numbro';
import {
  Banner,
  Details,
  Label,
  Title,
  Description,
  DescriptionItem,
} from './styles';

interface Props {
  artist: SpotifyApi.ArtistObjectFull;
}

const ArtistBanner: FC<Props> = ({ artist }) => (
  <Banner>
    <Details>
      <Label>artist</Label>
      <Title>{artist.name}</Title>
      <Description>
        <DescriptionItem>
          {`${numbro(artist.followers.total).format({
            thousandSeparated: true,
          })} followers`}
        </DescriptionItem>
        <DescriptionItem>{artist.genres.join(', ')}</DescriptionItem>
      </Description>
    </Details>
  </Banner>
);

export default ArtistBanner;
