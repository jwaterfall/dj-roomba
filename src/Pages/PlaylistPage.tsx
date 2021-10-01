import React, {FC} from 'react';
import {useParams} from 'react-router-dom';
import {Playlist} from '../components/Navbar/styles';
import PlaylistBanner from '../components/PlaylistPage/PlaylistBanner';
import PlaylistTracks from '../components/PlaylistPage/PlaylistTracks';
import usePlaylist from '../queries/usePlaylist';

const PlaylistPage: FC = () => {
  const {id} = useParams<{id: string}>();
  const {data: playlist} = usePlaylist(id);

  return playlist ? (
    <>
      <PlaylistBanner playlist={playlist} />
      <PlaylistTracks playlist={playlist} />
    </>
  ) : (
    <></>
  );
};

export default PlaylistPage;
