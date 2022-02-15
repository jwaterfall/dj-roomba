import { FC, useState } from 'react';

import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as Library } from '../../assets/icons/library.svg';
import { ReactComponent as LikedSongs } from '../../assets/icons/liked-songs.svg';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import useLikedPlaylists from '../../hooks/queries/useLikedPlaylists';
import {
  Divider,
  Link,
  LinkWithBackground,
  Links,
  NavbarContainer,
  Playlist,
  Playlists,
} from './styles';

const Navbar: FC = () => {
  useState<SpotifyApi.PlaylistObjectSimplified[]>();
  const { data: playlists } = useLikedPlaylists();

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
        <LinkWithBackground to="/library">
          <Library />
          Your Library
        </LinkWithBackground>
      </Links>
      <Links>
        <Link to="/liked-songs">
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
