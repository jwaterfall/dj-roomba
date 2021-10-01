import React from 'react';
import {Redirect, Route, RouteProps} from 'react-router-dom';

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  authenticationPath,
  ...rest
}) => {
  if (!isAuthenticated) {
    return (
      <Route {...rest}>
        <Redirect to={authenticationPath} />
      </Route>
    );
  }

  return <Route {...rest} />;
};

export default ProtectedRoute;
