import {FC} from 'react';
import ArtistAlbumCards from './ArtistAlbumCards';
import ArtistSingleCards from './ArtistSingleCards';
import PlaylistCards from './PlaylistCards';
import AlbumCards from './AlbumCards';

interface ArtistAlbumsProps {
  variant: 'artistAlbums';
  artistId: string;
}

interface ArtistSinglesProps {
  variant: 'artistSingles';
  artistId: string;
}

interface PlaylistsProps {
  variant: 'playlists';
  playlists: SpotifyApi.PlaylistObjectSimplified[];
}

interface AlbumsProps {
  variant: 'albums';
  albums: SpotifyApi.AlbumObjectSimplified[];
}

type Props =
  | ArtistAlbumsProps
  | ArtistSinglesProps
  | PlaylistsProps
  | AlbumsProps;

const Cards: FC<Props> = (props) => {
  if (props.variant === 'artistAlbums')
    return <ArtistAlbumCards artistId={props.artistId} />;

  if (props.variant === 'artistSingles')
    return <ArtistSingleCards artistId={props.artistId} />;

  if (props.variant === 'playlists')
    return <PlaylistCards playlists={props.playlists} />;

  if (props.variant === 'albums') return <AlbumCards albums={props.albums} />;

  return <></>;
};

export default Cards;
