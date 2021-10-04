import {FC} from 'react';
import PlaylistBanner from './PlaylistBanner';
import AlbumBanner from './AlbumBanner';
import ArtistBanner from './ArtistBanner';
import LikedSongsBanner from './LikedSongsBanner';

interface PlaylistProps {
  type: 'playlist';
  playlist: Playlist;
}

interface AlbumProps {
  type: 'album';
  album: Album;
}

interface ArtistProps {
  type: 'artist';
  artist: Artist;
}

interface LikedSongsProps {
  type: 'likedSongs';
  likedSongs: SpotifyApi.SavedTrackObject[];
}

type Props = PlaylistProps | AlbumProps | ArtistProps | LikedSongsProps;

const Banner: FC<Props> = (props) => (
  <>
    {props.type === 'playlist' && <PlaylistBanner playlist={props.playlist} />}
    {props.type === 'album' && <AlbumBanner album={props.album} />}
    {props.type === 'artist' && <ArtistBanner artist={props.artist} />}
    {props.type === 'likedSongs' && (
      <LikedSongsBanner likedSongs={props.likedSongs} />
    )}
  </>
);

export default Banner;
