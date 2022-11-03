import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { selectAuth } from '../../redux/slices/authSlice';
import { useAppSelector } from '../../redux/store';

const withAuth = (Page: NextPage) => {
  const PageWithAuth: NextPage = () => {
    const { isAuthenticated } = useAppSelector(selectAuth);
    const { push } = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        push('/sign-in-spotify');
      }
    }, [isAuthenticated, push]);

    return <Page />;
  };

  return PageWithAuth;
};

export default withAuth;
