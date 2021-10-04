import {FC} from 'react';
import dayjs from 'dayjs';
import usePlaybackControls from '../../hooks/usePlaybackControls';

import {
  SimpleTrack,
  PlaylistTrack,
  ArtistTopTrack,
  Detail,
  DetailLink,
} from './styles';
import ControlsSection from './ControlsSection';
import TitleSection from './TitleSection';

interface PlaylistProps {
  type: 'playlist';
  index: number;
  playlistTrack: SpotifyApi.PlaylistTrackObject;
}

interface AlbumProps {
  type: 'album';
  index: number;
  track: SpotifyApi.TrackObjectSimplified;
}

interface ArtistTopTracksProps {
  type: 'artistTopTracks';
  index: number;
  track: SpotifyApi.TrackObjectFull;
}

interface SavedTracksProps {
  type: 'savedTrack';
  index: number;
  savedTrack: SpotifyApi.SavedTrackObject;
}

type Props =
  | PlaylistProps
  | AlbumProps
  | ArtistTopTracksProps
  | SavedTracksProps;

const Track: FC<Props> = (props) => {
  const {playTracks} = usePlaybackControls();

  if (props.type === 'playlist') {
    const {index} = props;
    const track = props.playlistTrack.track;
    const addedAt = props.playlistTrack.added_at;
    const imageUrl: string | undefined = track.album.images[0].url;

    return (
      <PlaylistTrack onDoubleClick={() => playTracks([track])}>
        <ControlsSection index={index} track={track} />
        <TitleSection track={track} imageUrl={imageUrl} />
        <DetailLink to={`/album/${track.album.id}`}>
          {track.album.name}
        </DetailLink>
        <Detail>{dayjs(addedAt).format('MMM D, YYYY')}</Detail>
        <Detail>{dayjs.duration(track.duration_ms).format('m:ss')}</Detail>
      </PlaylistTrack>
    );
  }

  if (props.type === 'album') {
    const {index, track} = props;

    return (
      <SimpleTrack onDoubleClick={() => playTracks([track])}>
        <ControlsSection index={index} track={track} />
        <TitleSection track={track} />
        <Detail>{dayjs.duration(track.duration_ms).format('m:ss')}</Detail>
      </SimpleTrack>
    );
  }

  if (props.type === 'artistTopTracks') {
    const {index, track} = props;
    const imageUrl: string | undefined = track.album.images[0].url;

    return (
      <ArtistTopTrack onDoubleClick={() => playTracks([track])}>
        <ControlsSection index={index} track={track} />
        <TitleSection track={track} imageUrl={imageUrl} hideArist={true} />
        <DetailLink to={`/album/${track.album.id}`}>
          {track.album.name}
        </DetailLink>
        <Detail>{dayjs.duration(track.duration_ms).format('m:ss')}</Detail>
      </ArtistTopTrack>
    );
  }

  if (props.type === 'savedTrack') {
    const {index} = props;
    const track = props.savedTrack.track;
    const addedAt = props.savedTrack.added_at;
    const imageUrl: string | undefined = track.album.images[0].url;

    return (
      <PlaylistTrack onDoubleClick={() => playTracks([track])}>
        <ControlsSection index={index} track={track} />
        <TitleSection track={track} imageUrl={imageUrl} />
        <DetailLink to={`/album/${track.album.id}`}>
          {track.album.name}
        </DetailLink>
        <Detail>{dayjs(addedAt).format('MMM D, YYYY')}</Detail>
        <Detail>{dayjs.duration(track.duration_ms).format('m:ss')}</Detail>
      </PlaylistTrack>
    );
  }

  return <></>;
};

export default Track;
