import {FC} from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthSpotify from '../components/AuthSpotify';
import Navbar from '../components/Navbar';
import {useAuthContext} from '../contexts/auth';
import ProtectedRoute from './ProtectedRoute';
import {Content, PageLayout} from '../components/PageLayout';
import ControlBar from '../components/ControlBar';

import PlaylistPage from '../Pages/PlaylistPage';
import AlbumPage from '../Pages/AlbumPage';
import ArtistPage from '../Pages/ArtistPage';
import LikedSongsPage from '../Pages/LikedSongsPage';

const AUTH_URL_SPOTIFY = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private%20playlist-read-collaborative`;
// const AUTH_URL_DISCORD =
//   'https://discord.com/api/oauth2/authorize?REACT_APP_CLIENT_ID=592467922002247699&REACT_APP_REDIRECT_URI=http://localhost:3000/auth-discord&response_type=code&scope=guilds';

const Routes: FC = () => {
  const {spotifyAccessToken} = useAuthContext();

  return (
    <Switch>
      <Route path="/auth-spotify">
        <AuthSpotify />
      </Route>
      <Route
        path="/sign-in-spotify"
        component={() => {
          window.location.href = AUTH_URL_SPOTIFY;
          return null;
        }}
      />
      <ProtectedRoute
        isAuthenticated={!!spotifyAccessToken}
        authenticationPath="/sign-in-spotify">
        <PageLayout>
          <Navbar />
          <Content>
            <Switch>
              <Route exact path="/"></Route>
              <Route path="/playlist/:id">
                <PlaylistPage />
              </Route>
              <Route path="/album/:id">
                <AlbumPage />
              </Route>
              <Route path="/artist/:id">
                <ArtistPage />
              </Route>
              <Route path="/collection/tracks">
                <LikedSongsPage />
              </Route>
            </Switch>
          </Content>
          <ControlBar />
        </PageLayout>
      </ProtectedRoute>
    </Switch>
  );
};

export default Routes;
