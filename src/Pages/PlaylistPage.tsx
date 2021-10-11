import {FC} from 'react';
import {useParams} from 'react-router-dom';
import Banner from '../components/Banner';
import TrackList from '../components/TrackList';
import usePlaylist from '../queries/usePlaylist';
import usePlaylistTracks from '../queries/usePlaylistTracks';

const PlaylistPage: FC = () => {
  const {id} = useParams<{id: string}>();
  const {data: playlist} = usePlaylist(id);
  const {data: tracks} = usePlaylistTracks(id);

  return playlist && tracks ? (
    <>
      <Banner variant="playlist" playlist={playlist} />
      <TrackList
        variant="playlist"
        playlist={playlist}
        playlistTracks={tracks}
      />
    </>
  ) : (
    <></>
  );
};

export default PlaylistPage;
