import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Banner from '../../../components/Banner';
import Cards from '../../../components/Cards';
import withAuth from '../../../components/HOCS/withAuth';
import PageLayout from '../../../components/PageLayout';
import TrackList from '../../../components/TrackList';
import useArtist from '../../../hooks/queries/useArtist';

const ArtistPage: NextPage = () => {
  const router = useRouter();
  const artistId = router.query.artistId as string;
  const { data: artist } = useArtist(artistId);

  return (
    <PageLayout>
      {artist && <Banner variant="artist" artist={artist} />}
      <TrackList variant="artistTopTracks" artistId={artistId} />
      <Cards variant="artistAlbums" artistId={artistId} />
      <Cards variant="artistSingles" artistId={artistId} />
    </PageLayout>
  );
};

export default withAuth(ArtistPage);
