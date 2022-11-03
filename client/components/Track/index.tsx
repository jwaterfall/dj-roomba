import { FC } from 'react';
import { VideoSearchResult } from 'yt-search';

import usePlaybackControls from '../../hooks/usePlaybackControls';
import AlbumTrack from './AlbumTrack';
import ArtistTopTrack from './ArtistTopTrack';
import PlaylistTrack from './PlaylistTrack';
import QueueTrack from './QueueTrack';
import SavedTrack from './SavedTrack';
import SearchTrack from './SearchTrack';
import TopTrack from './TopTrack';
import YoutubeSearchTrack from './YoutubeSearchTrack';

interface TopProps {
  variant: 'top';
  index: number;
  track: SpotifyApi.TrackObjectFull;
}

interface PlaylistProps {
  variant: 'playlist';
  index: number;
  playlistTrack: SpotifyApi.PlaylistTrackObject;
}

interface AlbumProps {
  variant: 'album';
  index: number;
  track: SpotifyApi.TrackObjectSimplified;
}

interface ArtistTopTracksProps {
  variant: 'artistTopTracks';
  index: number;
  track: SpotifyApi.TrackObjectFull;
}

interface QueueProps {
  variant: 'queue';
  index: number;
  track: QueuedTrack;
}

interface SavedTracksProps {
  variant: 'savedTrack';
  index: number;
  savedTrack: SpotifyApi.SavedTrackObject;
}

interface SearchProps {
  variant: 'search';
  index: number;
  track: SpotifyApi.TrackObjectFull;
}

interface SearchProps {
  variant: 'search';
  index: number;
  track: SpotifyApi.TrackObjectFull;
}

interface YoutubeSearchProps {
  variant: 'youtubeSearch';
  index: number;
  video: VideoSearchResult;
}

type Props =
  | TopProps
  | PlaylistProps
  | AlbumProps
  | ArtistTopTracksProps
  | QueueProps
  | SavedTracksProps
  | SearchProps
  | YoutubeSearchProps;

const Track: FC<Props> = (props) => {
  switch (props.variant) {
    case 'top':
      return <TopTrack index={props.index} track={props.track} />;

    case 'playlist':
      return <PlaylistTrack index={props.index} playlistTrack={props.playlistTrack} />;

    case 'album':
      return <AlbumTrack index={props.index} track={props.track} />;

    case 'artistTopTracks':
      return <ArtistTopTrack index={props.index} track={props.track} />;

    case 'queue':
      return <QueueTrack index={props.index} track={props.track} />;

    case 'savedTrack':
      return <SavedTrack index={props.index} savedTrack={props.savedTrack} />;

    case 'search':
      return <SearchTrack index={props.index} track={props.track} />;

    case 'youtubeSearch':
      return <YoutubeSearchTrack index={props.index} video={props.video} />;

    default:
      return <></>;
  }
};

export default Track;
