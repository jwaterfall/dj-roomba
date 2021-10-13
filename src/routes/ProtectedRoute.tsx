import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useAppSelector} from '../redux/store';
import {selectAuth} from '../redux/slices/authSlice';

export const ProtectedRoute: React.FC = (props) => {
  const {isAuthenticated} = useAppSelector(selectAuth);

  if (!isAuthenticated) {
    return (
      <Route {...props}>
        <Redirect to={'/sign-in-spotify'} />
      </Route>
    );
  }

  return <Route {...props} />;
};

export default ProtectedRoute;
