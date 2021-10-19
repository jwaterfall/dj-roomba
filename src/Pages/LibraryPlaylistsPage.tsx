import {FC} from 'react';
import Cards from '../components/Cards';
import useUserPlaylists from '../queries/useUserPlaylists';

const LibraryPlaylistsPage: FC = () => {
  const {data: playlists} = useUserPlaylists();

  return playlists ? (
    <Cards variant="playlists" playlists={playlists} />
  ) : (
    <></>
  );
};

export default LibraryPlaylistsPage;
