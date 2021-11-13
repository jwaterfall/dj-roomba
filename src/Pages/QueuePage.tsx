import { FC } from 'react';
import { useParams } from 'react-router-dom';
import TrackList from '../components/TrackList';
import { selectPlayback } from '../redux/slices/playbackSlice';
import { useAppSelector } from '../redux/store';

const QueuePage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { queuedTracks } = useAppSelector(selectPlayback);

  return <TrackList variant="queue" tracks={queuedTracks} />;
};

export default QueuePage;
