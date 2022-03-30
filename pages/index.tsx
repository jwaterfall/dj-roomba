import type { NextPage } from 'next';

import Cards from '../components/Cards';
import withAuth from '../components/HOCS/withAuth';
import PageLayout from '../components/PageLayout';
import TrackList from '../components/TrackList';

const HomePage: NextPage = () => (
  <PageLayout>
    <Cards variant="topArtists" />
    <TrackList variant="topTracks" />
  </PageLayout>
);

export default withAuth(HomePage);
