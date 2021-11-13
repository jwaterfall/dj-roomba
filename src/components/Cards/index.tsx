import { FC } from 'react';

import AlbumCards from './AlbumCards';
import AlbumSearchCards from './AlbumSearchCards';
import ArtistAlbumCards from './ArtistAlbumCards';
import ArtistCards from './ArtistCards';
import ArtistSearchCards from './ArtistSearchCards';
import ArtistSingleCards from './ArtistSingleCards';
import PlaylistCards from './PlaylistCards';
import PlaylistSearchCards from './PlaylistSearchCards';

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

interface AlbumSearchProps {
  variant: 'albumSearch';
  albums: SpotifyApi.AlbumObjectSimplified[];
  query: string;
}

interface ArtistSearchProps {
  variant: 'artistSearch';
  artists: SpotifyApi.ArtistObjectFull[];
  query: string;
}

interface PlaylistSearchProps {
  variant: 'playlistSearch';
  playlists: SpotifyApi.PlaylistObjectSimplified[];
  query: string;
}

type Props =
  | ArtistAlbumsProps
  | ArtistSinglesProps
  | AlbumsProps
  | ArtistsProps
  | PlaylistsProps
  | ArtistSearchProps
  | AlbumSearchProps
  | PlaylistSearchProps;

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

  if (props.variant === 'artistSearch')
    return <ArtistSearchCards artists={props.artists} query={props.query} />;

  if (props.variant === 'albumSearch')
    return <AlbumSearchCards albums={props.albums} query={props.query} />;

  if (props.variant === 'playlistSearch')
    return (
      <PlaylistSearchCards playlists={props.playlists} query={props.query} />
    );

  return <></>;
};

export default Cards;
