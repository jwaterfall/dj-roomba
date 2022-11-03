import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Cards from '../../components/Cards';
import withAuth from '../../components/HOCS/withAuth';
import PageLayout from '../../components/PageLayout';
import useCategoryPlaylists from '../../hooks/queries/useCategoryPlaylists';

const PlaylistPage: NextPage = () => {
  const router = useRouter();
  const categoryId = router.query.categoryId as string;
  const { data: playlists } = useCategoryPlaylists(categoryId);

  return (
    <PageLayout>{playlists && <Cards variant="playlists" playlists={playlists} />}</PageLayout>
  );
};

export default withAuth(PlaylistPage);
