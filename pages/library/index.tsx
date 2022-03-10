import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import LibraryNavbar from '../../components/LibraryNavbar';
import PageLayout from '../../components/PageLayout';

const LibraryPage: NextPage = () => {
  const { push } = useRouter();

  useEffect(() => {
    push('/library/playlists');
  }, [push]);

  return (
    <PageLayout>
      <LibraryNavbar />
    </PageLayout>
  );
};

export default LibraryPage;
