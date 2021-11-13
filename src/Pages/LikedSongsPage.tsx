import { FC } from 'react';
import Banner from '../components/Banner';
import TrackList from '../components/TrackList';

const PlaylistPage: FC = () => (
  <>
    <Banner variant="likedSongs" />
    <TrackList variant="savedTracks" />
  </>
);

export default PlaylistPage;
