import { FC } from 'react';

import useCardCount from '../../hooks/useCardCount';
import useArtistAlbums from '../../queries/useArtistAlbums';
import Card from '../Card';
import { Container, Link, Title, TopBar } from '../Section';
import { CardContainerRow } from './styles';

interface Props {
  artistId: string;
}

const ArtistAlbumCards: FC<Props> = ({ artistId }) => {
  const cardCount = useCardCount();

  const { data: albums } = useArtistAlbums(artistId, cardCount);

  if (!albums?.length) return <></>;

  return (
    <Container>
      <TopBar>
        <Title>Albums</Title>
        <Link to={`/artist/${artistId}/discography/albums`}>
          see discography
        </Link>
      </TopBar>
      <CardContainerRow>
        {albums &&
          albums.map((album) => (
            <Card variant="album" album={album} artistPage={true} />
          ))}
      </CardContainerRow>
    </Container>
  );
};

export default ArtistAlbumCards;
