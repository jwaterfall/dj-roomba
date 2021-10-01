import {FC} from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthSpotify from '../components/AuthSpotify';
import Navbar from '../components/Navbar';
import {Content, PageLayout} from '../components/PageLayout';
import {useAuthContext} from '../contexts/auth';
import ProtectedRoute from './ProtectedRoute';
import PlaylistPage from '../Pages/PlaylistPage';

const AUTH_URL_SPOTIFY =
  'https://accounts.spotify.com/authorize?client_id=f422d702113a4f448dec04e19d37f9d9&response_type=code&redirect_uri=http://localhost:3000/auth-spotify&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private%20playlist-read-collaborative';
// const AUTH_URL_DISCORD =
//   'https://discord.com/api/oauth2/authorize?client_id=592467922002247699&redirect_uri=http://localhost:3000/auth-discord&response_type=code&scope=guilds';

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
            </Switch>
          </Content>
        </PageLayout>
      </ProtectedRoute>
    </Switch>
  );
};

export default Routes;
