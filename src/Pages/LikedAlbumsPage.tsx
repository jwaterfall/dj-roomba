import { FC } from 'react';

import Cards from '../components/Cards';
import useLikedAlbums from '../queries/useLikedAlbums';

const LikedAlbumsPage: FC = () => {
  const { data: albums } = useLikedAlbums();

  return albums ? (
    <Cards
      variant="albums"
      albums={albums.map((savedAlbum) => savedAlbum.album)}
    />
  ) : (
    <></>
  );
};

export default LikedAlbumsPage;
