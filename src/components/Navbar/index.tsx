import {FC, useState} from 'react';
import useUserPlaylists from '../../queries/useUserPlaylists';

import {ReactComponent as Home} from '../../assets/icons/home.svg';
import {ReactComponent as Search} from '../../assets/icons/search.svg';
import {ReactComponent as Library} from '../../assets/icons/library.svg';
import {ReactComponent as LikedSongs} from '../../assets/icons/liked-songs.svg';

import {
  NavbarContainer,
  Links,
  Link,
  LinkWithBackground,
  Divider,
  Playlists,
  Playlist,
} from './styles';

const Navbar: FC = () => {
  useState<SpotifyApi.PlaylistObjectSimplified[]>();
  const {data: playlists} = useUserPlaylists();

  return (
    <NavbarContainer>
      <Links>
        <LinkWithBackground to="/" exact>
          <Home />
          Home
        </LinkWithBackground>
        <LinkWithBackground to="/search">
          <Search />
          Search
        </LinkWithBackground>
        <LinkWithBackground to="/collection/playlists">
          <Library />
          Your Library
        </LinkWithBackground>
      </Links>
      <Links>
        <Link to="/collection/tracks">
          <LikedSongs />
          Liked Songs
        </Link>
      </Links>
      <Divider />
      <Playlists>
        {playlists?.map((playlist) => (
          <Playlist to={`/playlist/${playlist.id}`} key={playlist.id}>
            {playlist.name}
          </Playlist>
        ))}
      </Playlists>
    </NavbarContainer>
  );
};

export default Navbar;
