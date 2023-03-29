import type { NextPage } from 'next';

import Cards from '../../components/Cards';
import LibraryNavbar from '../../components/LibraryNavbar';
import PageLayout from '../../components/PageLayout';
import useFollowedArtists from '../../hooks/queries/useFollowedArtists';

const LibraryArtistsPage: NextPage = () => {
  const { data: artists } = useFollowedArtists();

  return (
    <PageLayout>
      <LibraryNavbar />
      {artists && <Cards variant="artists" artists={artists} />}
    </PageLayout>
  );
};

export default LibraryArtistsPage;
