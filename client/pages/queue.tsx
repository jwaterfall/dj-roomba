import type { NextPage } from 'next';

import PageLayout from '../components/PageLayout';
import TrackList from '../components/TrackList';
import { selectPlayback } from '../redux/slices/playbackSlice';
import { useAppSelector } from '../redux/store';

const QueuePage: NextPage = () => {
  const { queuedTracks } = useAppSelector(selectPlayback);

  return (
    <PageLayout>
      <TrackList variant="queue" tracks={queuedTracks} />
    </PageLayout>
  );
};

export default QueuePage;
