import { FC } from 'react';

import Cards from '../components/Cards';
import useLikedPlaylists from '../queries/useLikedPlaylists';

const LikedPlaylistsPage: FC = () => {
  const { data: playlists } = useLikedPlaylists();

  return playlists ? (
    <Cards variant="playlists" playlists={playlists} />
  ) : (
    <></>
  );
};

export default LikedPlaylistsPage;
