import type { NextPage } from 'next';

import Cards from '../../components/Cards';
import LibraryNavbar from '../../components/LibraryNavbar';
import PageLayout from '../../components/PageLayout';
import useLikedAlbums from '../../hooks/queries/useLikedAlbums';

const LibraryAlbumsPage: NextPage = () => {
  const { data: albums } = useLikedAlbums();

  return (
    <PageLayout>
      <LibraryNavbar />
      {albums && (
        <Cards
          variant="albums"
          albums={albums.map((savedAlbum) => savedAlbum.album)}
        />
      )}
    </PageLayout>
  );
};

export default LibraryAlbumsPage;
