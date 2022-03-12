import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import withAuth from '../../../../components/HOCS/withAuth';
import PageLayout from '../../../../components/PageLayout';
import DiscographyAlbumTrackList from '../../../../components/TrackList/DiscographyAlbumTrackList';
import useArtistSingles from '../../../../hooks/queries/useArtistSingles';

const ArtistPage: NextPage = () => {
  const router = useRouter();
  const artistId = router.query.artistId as string;
  const { data: singles } = useArtistSingles(artistId);

  return (
    <PageLayout>
      {singles?.map((single) => (
        <DiscographyAlbumTrackList key={single.id} album={single} />
      ))}
    </PageLayout>
  );
};

export default withAuth(ArtistPage);
