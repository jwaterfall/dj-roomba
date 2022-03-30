import { FC } from 'react';

import useTopArtists from '../../hooks/queries/useTopArtists';
import useCardCount from '../../hooks/useCardCount';
import Card from '../Card';
import NavLink from '../NavLink';
import { Container, Link, Title, TopBar } from '../Section';
import { CardContainerRow } from './styles';

const TopArtistsCards: FC = () => {
  const cardCount = useCardCount();

  const { data: artists } = useTopArtists(cardCount);

  if (!artists?.length) return <></>;

  return (
    <Container>
      <TopBar>
        <Title>Top artists</Title>
        <NavLink href="/library/artists" passHref>
          <Link>see all</Link>
        </NavLink>
      </TopBar>
      <CardContainerRow>
        {artists &&
          artists.map((artist) => <Card key={artist.id} variant="artist" artist={artist} />)}
      </CardContainerRow>
    </Container>
  );
};

export default TopArtistsCards;
