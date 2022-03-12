import { FC } from 'react';

import AlbumBanner from './AlbumBanner';
import ArtistBanner from './ArtistBanner';
import DiscographyAlbumBanner from './DiscographyAlbumBanner';
import LikedSongsBanner from './LikedSongsBanner';
import PlaylistBanner from './PlaylistBanner';

interface PlaylistProps {
  variant: 'playlist';
  playlist: SpotifyApi.PlaylistObjectFull;
}

interface AlbumProps {
  variant: 'album';
  album: SpotifyApi.AlbumObjectSimplified;
}

interface ArtistProps {
  variant: 'artist';
  artist: SpotifyApi.ArtistObjectFull;
}

interface LikedSongsProps {
  variant: 'likedSongs';
}

interface DiscographyAlbumProps {
  variant: 'discographyAlbum';
  album: SpotifyApi.AlbumObjectSimplified;
}

type Props =
  | PlaylistProps
  | AlbumProps
  | ArtistProps
  | LikedSongsProps
  | DiscographyAlbumProps;

const Banner: FC<Props> = (props) => (
  <>
    {props.variant === 'playlist' && (
      <PlaylistBanner playlist={props.playlist} />
    )}
    {props.variant === 'album' && <AlbumBanner album={props.album} />}
    {props.variant === 'artist' && <ArtistBanner artist={props.artist} />}
    {props.variant === 'likedSongs' && <LikedSongsBanner />}
    {props.variant === 'discographyAlbum' && (
      <DiscographyAlbumBanner album={props.album} />
    )}
  </>
);

export default Banner;
