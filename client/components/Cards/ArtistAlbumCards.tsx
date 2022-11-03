import { FC } from 'react';

import useArtistAlbums from '../../hooks/queries/useArtistAlbums';
import useCardCount from '../../hooks/useCardCount';
import Card from '../Card';
import NavLink from '../NavLink';
import {
  Container, Link, Title, TopBar,
} from '../Section';
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
        <NavLink href={`/artists/${artistId}/discography/albums`} passHref>
          <Link>see discography</Link>
        </NavLink>
      </TopBar>
      <CardContainerRow>
        {albums
          && albums.map((album) => (
            <Card key={album.id} variant="album" album={album} artistPage />
          ))}
      </CardContainerRow>
    </Container>
  );
};

export default ArtistAlbumCards;
