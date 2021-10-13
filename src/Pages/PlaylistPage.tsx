import {FC} from 'react';
import {useParams} from 'react-router-dom';
import Banner from '../components/Banner';
import TrackList from '../components/TrackList';
import usePlaylist from '../queries/usePlaylist';

const PlaylistPage: FC = () => {
  const {id} = useParams<{id: string}>();
  const {data: playlist} = usePlaylist(id);

  return playlist ? (
    <>
      <Banner variant="playlist" playlist={playlist} />
      <TrackList variant="playlist" playlistId={playlist.id} />
    </>
  ) : (
    <></>
  );
};

export default PlaylistPage;
