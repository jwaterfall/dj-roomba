import type { NextPage } from 'next';

import Cards from '../components/Cards';
import NewReleasesCards from '../components/Cards/NewReleasesCards';
import PageLayout from '../components/PageLayout';
import TrackList from '../components/TrackList';

const HomePage: NextPage = () => (
  <PageLayout>
    <NewReleasesCards />
    <Cards variant="topArtists" />
    <TrackList variant="topTracks" />
  </PageLayout>
);

export default HomePage;
