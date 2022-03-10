import type { NextPage } from 'next';

import withAuth from '../components/HOCS/withAuth';
import PageLayout from '../components/PageLayout';

const HomePage: NextPage = () => <PageLayout></PageLayout>;

export default withAuth(HomePage);
