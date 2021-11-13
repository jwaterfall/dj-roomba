import { FC } from 'react';

import useCardCount from '../../hooks/useCardCount';
import useArtistSingles from '../../queries/useArtistSingles';
import Card from '../Card';
import { Container, Link, Title, TopBar } from '../Section';
import { CardContainerRow } from './styles';

interface Props {
  artistId: string;
}

const ArtistSingleCards: FC<Props> = ({ artistId }) => {
  const cardCount = useCardCount();

  const { data: singles } = useArtistSingles(artistId, cardCount);

  if (!singles?.length) return <></>;

  return (
    <Container>
      <TopBar>
        <Title>Singles</Title>
        <Link to={`/artist/${artistId}/discography/singles`}>
          see discography
        </Link>
      </TopBar>
      <CardContainerRow>
        {singles &&
          singles.map((single) => (
            <Card variant="album" album={single} artistPage={true} />
          ))}
      </CardContainerRow>
    </Container>
  );
};

export default ArtistSingleCards;
