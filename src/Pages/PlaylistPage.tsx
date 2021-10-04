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
      <Banner type="playlist" playlist={playlist} />
      <TrackList type="playlist" playlistTracks={playlist.tracks} />
    </>
  ) : (
    <></>
  );
};

export default PlaylistPage;
