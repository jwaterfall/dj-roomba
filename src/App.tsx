import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {BrowserRouter as Router} from 'react-router-dom';
import authContext from './contexts/auth';
import useAuth from './hooks/useAuth';
import Routes from './navigation/Routes';
import GlobalStyle from './GlobalStyle';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const queryClient = new QueryClient();

const App = () => {
  const {spotifyAccessToken, setSpotifyAuthCode} = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <authContext.Provider value={{spotifyAccessToken, setSpotifyAuthCode}}>
        <GlobalStyle />
        <ReactQueryDevtools />
        <Routes />
      </authContext.Provider>
    </QueryClientProvider>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
