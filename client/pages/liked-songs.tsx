import type { NextPage } from 'next';

import Banner from '../components/Banner';
import PageLayout from '../components/PageLayout';
import TrackList from '../components/TrackList';

const LibraryTracksPage: NextPage = () => (
  <PageLayout>
    <Banner variant="likedSongs" />
    <TrackList variant="saved" />
  </PageLayout>
);

export default LibraryTracksPage;
