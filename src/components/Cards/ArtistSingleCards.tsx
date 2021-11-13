import { FC, useMemo } from 'react';

import useViewport from '../../hooks/useViewport';
import useArtistSingles from '../../queries/useArtistSingles';
import Card from '../Card';
import { Container, Link, Title, TopBar } from '../Section';
import { CardContainerRow } from './styles';

interface Props {
  artistId: string;
}

const ArtistSingleCards: FC<Props> = ({ artistId }) => {
  const { width } = useViewport();

  const cardCount = useMemo(() => {
    if (width < 1000) return 2;
    if (width < 1200) return 3;
    if (width < 1400) return 4;
    if (width < 1600) return 5;
    if (width < 1800) return 6;
    if (width < 2000) return 7;
    if (width < 2200) return 8;
    if (width < 2400) return 9;
    return 10;
  }, [width]);

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
