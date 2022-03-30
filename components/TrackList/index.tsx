import { FC } from 'react';
import { VideoSearchResult } from 'yt-search';

import Albums from '../../pages/library/albums';
import AlbumTrackList from './AlbumTrackList';
import ArtistTopTrackList from './ArtistTopTrackList';
import DiscographyAlbumTrackList from './DiscographyAlbumTrackList';
import LikedSongsTrackList from './LikedSongsTrackList';
import PlaylistTrackList from './PlaylistTrackList';
import QueueTrackList from './QueueTrackList';
import SearchTrackList from './SearchTrackList';
import TopTrackList from './TopTrackList';
import YoutubeSearchTrackList from './YoutubeSearchTrackList';

interface TopTracksProps {
  variant: 'topTracks';
}

interface PlaylistProps {
  variant: 'playlist';
  playlistId: string;
}

interface AlbumProps {
  variant: 'album';
  album: SpotifyApi.AlbumObjectFull;
  tracks: SpotifyApi.TrackObjectSimplified[];
}

interface ArtistTopTracksProps {
  variant: 'artistTopTracks';
  artistId: string;
}

interface DiscographyAlbumTracksProps {
  variant: 'discographyAlbum';
  album: SpotifyApi.AlbumObjectSimplified;
}

interface QueueProps {
  variant: 'queue';
  tracks: QueuedTrack[];
}

interface SavedTracksProps {
  variant: 'saved';
}

interface SearchProps {
  variant: 'search';
  tracks: SpotifyApi.TrackObjectFull[];
  query: string;
}

interface YoutubeSearchProps {
  variant: 'youtubeSearch';
  videos: VideoSearchResult[];
  query: string;
}

type Props =
  | TopTracksProps
  | PlaylistProps
  | AlbumProps
  | ArtistTopTracksProps
  | DiscographyAlbumTracksProps
  | QueueProps
  | SavedTracksProps
  | SearchProps
  | YoutubeSearchProps;

const TrackList: FC<Props> = (props) => {
  switch (props.variant) {
    case 'topTracks':
      return <TopTrackList />;

    case 'playlist':
      return <PlaylistTrackList playlistId={props.playlistId} />;

    case 'album':
      return <AlbumTrackList album={props.album} tracks={props.tracks} />;

    case 'artistTopTracks':
      return <ArtistTopTrackList artistId={props.artistId} />;

    case 'discographyAlbum':
      return <DiscographyAlbumTrackList album={props.album} />;

    case 'queue':
      return <QueueTrackList tracks={props.tracks} />;

    case 'saved':
      return <LikedSongsTrackList />;

    case 'search':
      return <SearchTrackList tracks={props.tracks} query={props.query} />;

    case 'youtubeSearch':
      return <YoutubeSearchTrackList videos={props.videos} query={props.query} />;

    default:
      return <></>;
  }
};

export default TrackList;
