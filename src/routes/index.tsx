import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AlbumPage from '../Pages/AlbumPage';
import ArtistPage from '../Pages/ArtistPage';
import DashboardPage from '../Pages/DashboardPage';
import FollowedArtistsPage from '../Pages/FollowedArtistsPage';
import LikedAlbumsPage from '../Pages/LikedAlbumsPage';
import LikedPlaylistsPage from '../Pages/LikedPlaylistsPage';
import LikedSongsPage from '../Pages/LikedSongsPage';
import PlaylistPage from '../Pages/PlaylistPage';
import QueuePage from '../Pages/QueuePage';
import SearchPage from '../Pages/SearchPage';
import AuthDiscord from '../components/AuthDiscord';
import AuthSpotify from '../components/AuthSpotify';
import ControlBar from '../components/ControlBar';
import LibraryNavbar from '../components/LibraryNavbar';
import Navbar from '../components/Navbar';
import { Content, PageLayout } from '../components/PageLayout';
import ProtectedRoute from './ProtectedRoute';

const AUTH_URL_SPOTIFY = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URI}&response_type=code&scope=streaming%20user-read-email%20user-follow-read%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private%20playlist-read-collaborative`;
const AUTH_URL_DISCORD = `https://discord.com/api/oauth2/authorize?client_id=${process.env.REACT_APP_DISCORD_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_DISCORD_REDIRECT_URI}&response_type=code&scope=identify`;

const Routes: FC = () => {
  return (
    <Switch>
      <Route
        path="/sign-in-spotify"
        component={() => {
          window.location.href = AUTH_URL_SPOTIFY;
          return null;
        }}
      />
      <Route path="/auth-spotify">
        <AuthSpotify />
      </Route>
      <Route
        path="/sign-in-discord"
        component={() => {
          window.location.href = AUTH_URL_DISCORD;
          return null;
        }}
      />
      <Route path="/auth-discord">
        <AuthDiscord />
      </Route>
      <ProtectedRoute>
        <PageLayout>
          <Navbar />
          <Content>
            <Switch>
              <Route exact path="/">
                <DashboardPage />
              </Route>
              <Route path="/queue">
                <QueuePage />
              </Route>
              <Route path="/playlist/:id">
                <PlaylistPage />
              </Route>
              <Route path="/album/:id">
                <AlbumPage />
              </Route>
              <Route path="/artist/:id">
                <ArtistPage />
              </Route>
              <Route path="/library" exact>
                <Redirect to="/library/playlists" />
              </Route>
              <Route path="/library">
                <LibraryNavbar />
                <Route path="/library/playlists">
                  <LikedPlaylistsPage />
                </Route>
                <Route path="/library/artists">
                  <FollowedArtistsPage />
                </Route>
                <Route path="/library/albums">
                  <LikedAlbumsPage />
                </Route>
              </Route>
              <Route path="/liked-songs">
                <LikedSongsPage />
              </Route>
              <Route path="/search">
                <SearchPage />
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
