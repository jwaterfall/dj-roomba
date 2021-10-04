import {FC} from 'react';
import Banner from '../components/Banner';
import TrackList from '../components/TrackList';
import useLikedSongs from '../queries/useLikedSongs';

const PlaylistPage: FC = () => {
  const {data: likedSongs} = useLikedSongs();

  return likedSongs ? (
    <>
      <Banner type="likedSongs" likedSongs={likedSongs} />
      <TrackList type="savedTracks" savedTracks={likedSongs} />
    </>
  ) : (
    <></>
  );
};

export default PlaylistPage;
