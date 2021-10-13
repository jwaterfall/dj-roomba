import {FC} from 'react';
import PlaylistBanner from './PlaylistBanner';
import AlbumBanner from './AlbumBanner';
import ArtistBanner from './ArtistBanner';
import LikedSongsBanner from './LikedSongsBanner';

interface PlaylistProps {
  variant: 'playlist';
  playlist: SpotifyApi.SinglePlaylistResponse;
}

interface AlbumProps {
  variant: 'album';
  album: SpotifyApi.SingleAlbumResponse;
}

interface ArtistProps {
  variant: 'artist';
  artist: SpotifyApi.ArtistObjectFull;
}

interface LikedSongsProps {
  variant: 'likedSongs';
}

type Props = PlaylistProps | AlbumProps | ArtistProps | LikedSongsProps;

const Banner: FC<Props> = (props) => (
  <>
    {props.variant === 'playlist' && (
      <PlaylistBanner playlist={props.playlist} />
    )}
    {props.variant === 'album' && <AlbumBanner album={props.album} />}
    {props.variant === 'artist' && <ArtistBanner artist={props.artist} />}
    {props.variant === 'likedSongs' && <LikedSongsBanner />}
  </>
);

export default Banner;
