import { FC } from 'react';

import useNewReleases from '../../hooks/queries/useNewReleases';
import useCardCount from '../../hooks/useCardCount';
import Card from '../Card';
import { Container, Title, TopBar } from '../Section';
import { CardContainerRow } from './styles';

const NewReleasesCards: FC = () => {
  const cardCount = useCardCount();
  const { data: albums } = useNewReleases(cardCount);

  if (!albums?.length) return <></>;

  return (
    <Container>
      <TopBar>
        <Title>New Releases</Title>
      </TopBar>
      <CardContainerRow>
        {albums && albums.map((album) => <Card key={album.id} variant="album" album={album} />)}
      </CardContainerRow>
    </Container>
  );
};

export default NewReleasesCards;
