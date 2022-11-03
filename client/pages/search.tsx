import type { NextPage } from 'next';

import withAuth from '../components/HOCS/withAuth';
import PageLayout from '../components/PageLayout';
import Search from '../components/Search';

const SearchPage: NextPage = () => (
  <PageLayout>
    <Search />
  </PageLayout>
);

export default withAuth(SearchPage);
