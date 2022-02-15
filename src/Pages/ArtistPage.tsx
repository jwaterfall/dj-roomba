import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import TrackList from '../components/TrackList';
import useArtist from '../hooks/queries/useArtist';

const ArtistPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: artist } = useArtist(id);

  return artist ? (
    <>
      <Banner variant="artist" artist={artist} />
      <TrackList variant="artistTopTracks" artistId={artist.id} />
      <Cards variant="artistAlbums" artistId={id} />
      <Cards variant="artistSingles" artistId={id} />
    </>
  ) : (
    <></>
  );
};

export default ArtistPage;
