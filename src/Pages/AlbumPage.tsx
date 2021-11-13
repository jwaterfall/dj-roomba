import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import TrackList from '../components/TrackList';
import useAlbum from '../queries/useAlbum';
import useAlbumTracks from '../queries/useAlbumTracks';

const AlbumPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: album } = useAlbum(id);
  const { data: tracks } = useAlbumTracks(id);

  return album && tracks ? (
    <>
      <Banner variant="album" album={album} />
      <TrackList variant="album" album={album} tracks={tracks} />
    </>
  ) : (
    <></>
  );
};

export default AlbumPage;
