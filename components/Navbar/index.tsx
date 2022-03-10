import { FC, useState } from 'react';
import { MdFavorite, MdHome, MdLibraryMusic, MdSearch } from 'react-icons/md';

import useLikedPlaylists from '../../hooks/queries/useLikedPlaylists';
import NavLink from '../NavLink';
import {
  Divider,
  Link,
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
        <NavLink href="/" passHref>
          <Link>
            <MdHome />
            Home
          </Link>
        </NavLink>
        <NavLink href="/search" passHref>
          <Link>
            <MdSearch />
            Search
          </Link>
        </NavLink>
        <NavLink href="/library" passHref exact={false}>
          <Link>
            <MdLibraryMusic />
            Your Library
          </Link>
        </NavLink>
      </Links>
      <Links>
        <NavLink href="/liked-songs" passHref>
          <Link>
            <MdFavorite />
            Liked Songs
          </Link>
        </NavLink>
      </Links>
      <Divider />
      <Playlists>
        {playlists?.map((playlist) => (
          <NavLink
            href={`/playlists/${playlist.id}`}
            key={playlist.id}
            passHref
          >
            <Playlist>{playlist.name}</Playlist>
          </NavLink>
        ))}
      </Playlists>
    </NavbarContainer>
  );
};

export default Navbar;
