import {FC} from 'react';
import {useParams} from 'react-router-dom';
import Banner from '../components/Banner';
import TrackList from '../components/TrackList';
import useAlbum from '../queries/useAlbum';

const AlbumPage: FC = () => {
  const {id} = useParams<{id: string}>();
  const {data: album} = useAlbum(id);

  return album ? (
    <>
      <Banner type="album" album={album} />
      <TrackList
        type="album"
        tracks={album.tracks}
        copyrights={album.copyrights}
      />
    </>
  ) : (
    <></>
  );
};

export default AlbumPage;
