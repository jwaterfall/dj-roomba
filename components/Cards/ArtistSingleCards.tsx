import { FC } from 'react';

import useArtistSingles from '../../hooks/queries/useArtistSingles';
import useCardCount from '../../hooks/useCardCount';
import Card from '../Card';
import NavLink from '../NavLink';
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
        <NavLink href={`/artists/${artistId}/discography/singles`} passHref>
          <Link>see discography</Link>
        </NavLink>
      </TopBar>
      <CardContainerRow>
        {singles &&
          singles.map((single) => (
            <Card
              key={single.id}
              variant="album"
              album={single}
              artistPage={true}
            />
          ))}
      </CardContainerRow>
    </Container>
  );
};

export default ArtistSingleCards;
