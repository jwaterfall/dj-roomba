import {FC} from 'react';
import {useParams} from 'react-router-dom';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import TrackList from '../components/TrackList';
import useArtist from '../queries/useArtist';

const ArtistPage: FC = () => {
  const {id} = useParams<{id: string}>();
  const {data: artist} = useArtist(id);

  return artist ? (
    <>
      <Banner type="artist" artist={artist} />
      <TrackList type="artistTopTracks" tracks={artist.topTracks} />
      {artist.topAlbums.length > 0 && (
        <Cards
          type="album"
          linkText="see discography"
          linkPath={`/artist/${artist.id}/discography/albums`}
          albums={artist.topAlbums}
        />
      )}
      {artist.topSingles.length > 0 && (
        <Cards
          type="single"
          linkText="see discography"
          linkPath={`/artist/${artist.id}/discography/singles`}
          albums={artist.topSingles}
        />
      )}
    </>
  ) : (
    <></>
  );
};

export default ArtistPage;
