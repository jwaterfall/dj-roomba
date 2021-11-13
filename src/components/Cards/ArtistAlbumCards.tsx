import { FC, useMemo } from 'react';

import useViewport from '../../hooks/useViewport';
import useArtistAlbums from '../../queries/useArtistAlbums';
import Card from '../Card';
import { Container, Link, Title, TopBar } from '../Section';
import { CardContainerRow } from './styles';

interface Props {
  artistId: string;
}

const ArtistAlbumCards: FC<Props> = ({ artistId }) => {
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
