import { FC } from 'react';

import AlbumCards from './AlbumCards';
import ArtistAlbumCards from './ArtistAlbumCards';
import ArtistCards from './ArtistCards';
import ArtistSingleCards from './ArtistSingleCards';
import PlaylistCards from './PlaylistCards';

interface ArtistAlbumsProps {
  variant: 'artistAlbums';
  artistId: string;
}

interface ArtistSinglesProps {
  variant: 'artistSingles';
  artistId: string;
}

interface AlbumsProps {
  variant: 'albums';
  albums: SpotifyApi.AlbumObjectSimplified[];
}

interface ArtistsProps {
  variant: 'artists';
  artists: SpotifyApi.ArtistObjectFull[];
}

interface PlaylistsProps {
  variant: 'playlists';
  playlists: SpotifyApi.PlaylistObjectSimplified[];
}

type Props =
  | ArtistAlbumsProps
  | ArtistSinglesProps
  | AlbumsProps
  | ArtistsProps
  | PlaylistsProps;

const Cards: FC<Props> = (props) => {
  if (props.variant === 'artistAlbums')
    return <ArtistAlbumCards artistId={props.artistId} />;

  if (props.variant === 'artistSingles')
    return <ArtistSingleCards artistId={props.artistId} />;

  if (props.variant === 'albums') return <AlbumCards albums={props.albums} />;

  if (props.variant === 'artists')
    return <ArtistCards artists={props.artists} />;

  if (props.variant === 'playlists')
    return <PlaylistCards playlists={props.playlists} />;

  return <></>;
};

export default Cards;
