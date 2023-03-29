import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Banner from '../../components/Banner';
import PageLayout from '../../components/PageLayout';
import TrackList from '../../components/TrackList';
import usePlaylist from '../../hooks/queries/usePlaylist';

const PlaylistPage: NextPage = () => {
  const router = useRouter();
  const playlistId = router.query.playlistId as string;
  const { data: playlist } = usePlaylist(playlistId);

  return (
    <PageLayout>
      {playlist && <Banner variant="playlist" playlist={playlist} />}
      {playlist && <TrackList variant="playlist" playlistId={playlist.id} />}
    </PageLayout>
  );
};

export default PlaylistPage;
