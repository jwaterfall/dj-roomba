import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Banner from '../../components/Banner';
import PageLayout from '../../components/PageLayout';
import TrackList from '../../components/TrackList';
import useAlbum from '../../hooks/queries/useAlbum';
import useAlbumTracks from '../../hooks/queries/useAlbumTracks';

const AlbumPage: NextPage = () => {
  const router = useRouter();
  const albumId = router.query.albumId as string;
  const { data: album } = useAlbum(albumId);
  const { data: tracks } = useAlbumTracks(albumId);

  return (
    <PageLayout>
      {album && <Banner variant="album" album={album} />}
      {album && tracks && (
        <TrackList variant="album" album={album} tracks={tracks} />
      )}
    </PageLayout>
  );
};

export default AlbumPage;
