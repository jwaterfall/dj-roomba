import { FC } from 'react';

import AlbumCards from './AlbumCards';
import AlbumSearchCards from './AlbumSearchCards';
import ArtistAlbumCards from './ArtistAlbumCards';
import ArtistCards from './ArtistCards';
import ArtistSearchCards from './ArtistSearchCards';
import ArtistSingleCards from './ArtistSingleCards';
import PlaylistCards from './PlaylistCards';
import PlaylistSearchCards from './PlaylistSearchCards';
import TopArtistsCards from './TopArtistsCards';

interface ArtistAlbumsProps {
  variant: 'artistAlbums';
  artistId: string;
}

interface ArtistSinglesProps {
  variant: 'artistSingles';
  artistId: string;
}

interface TopArtistsProps {
  variant: 'topArtists';
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
  | TopArtistsProps
  | AlbumsProps
  | ArtistsProps
  | PlaylistsProps
  | ArtistSearchProps
  | AlbumSearchProps
  | PlaylistSearchProps;

const Cards: FC<Props> = (props) => {
  switch (props.variant) {
    case 'artistAlbums':
      return <ArtistAlbumCards artistId={props.artistId} />;
    case 'artistSingles':
      return <ArtistSingleCards artistId={props.artistId} />;
    case 'topArtists':
      return <TopArtistsCards />;
    case 'albums':
      return <AlbumCards albums={props.albums} />;
    case 'artists':
      return <ArtistCards artists={props.artists} />;
    case 'playlists':
      return <PlaylistCards playlists={props.playlists} />;
    case 'albumSearch':
      return <AlbumSearchCards albums={props.albums} query={props.query} />;
    case 'artistSearch':
      return <ArtistSearchCards artists={props.artists} query={props.query} />;
    case 'playlistSearch':
      return <PlaylistSearchCards playlists={props.playlists} query={props.query} />;
    default:
      return <></>;
  }
};

export default Cards;
