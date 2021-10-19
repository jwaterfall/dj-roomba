import {FC} from 'react';
import Cards from '../components/Cards';
import useUserAlbums from '../queries/useUserAlbums';

const LibraryAlbumsPage: FC = () => {
  const {data: albums} = useUserAlbums();

  return albums ? (
    <Cards
      variant="albums"
      albums={albums.map((savedAlbum) => savedAlbum.album)}
    />
  ) : (
    <></>
  );
};

export default LibraryAlbumsPage;
