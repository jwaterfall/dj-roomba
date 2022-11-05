import type { NextPage } from 'next';

import Cards from '../../components/Cards';
import withAuth from '../../components/HOCS/withAuth';
import LibraryNavbar from '../../components/LibraryNavbar';
import PageLayout from '../../components/PageLayout';
import useLikedPlaylists from '../../hooks/queries/useLikedPlaylists';

const LibraryPlaylistsPage: NextPage = () => {
  const { data: playlists } = useLikedPlaylists();

  return (
    <PageLayout>
      <LibraryNavbar />
      {playlists && <Cards variant="playlists" playlists={playlists} />}
    </PageLayout>
  );
};

export default withAuth(LibraryPlaylistsPage);
