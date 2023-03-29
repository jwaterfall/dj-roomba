import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import PageLayout from '../../../../components/PageLayout';
import DiscographyAlbumTrackList from '../../../../components/TrackList/DiscographyAlbumTrackList';
import useArtistAlbums from '../../../../hooks/queries/useArtistAlbums';

const ArtistPage: NextPage = () => {
  const router = useRouter();
  const artistId = router.query.artistId as string;
  const { data: albums } = useArtistAlbums(artistId);

  return (
    <PageLayout>
      {albums?.map((album) => (
        <DiscographyAlbumTrackList key={album.id} album={album} />
      ))}
    </PageLayout>
  );
};

export default ArtistPage;
