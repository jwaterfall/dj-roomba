import {FC} from 'react';
import dayjs from 'dayjs';
import usePlaybackControls from '../../hooks/usePlaybackControls';

import {
  SimpleTrack,
  PlaylistTrack,
  ArtistTopTrack,
  QueueTrack,
  Detail,
  DetailLink,
} from './styles';
import ControlsSection from './ControlsSection';
import TitleSection from './TitleSection';

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

type Props =
  | PlaylistProps
  | AlbumProps
  | ArtistTopTracksProps
  | QueueProps
  | SavedTracksProps;

const Track: FC<Props> = (props) => {
  const {playTrack, skipTo} = usePlaybackControls();

  if (props.variant === 'playlist') {
    const {index} = props;
    const track = props.playlistTrack.track;
    const addedAt = props.playlistTrack.added_at;
    const imageUrl: string | undefined = track.album.images[0].url;

    return (
      <PlaylistTrack onDoubleClick={() => playTrack(track.id)}>
        <ControlsSection variant="standard" index={index} track={track} />
        <TitleSection variant="standard" track={track} imageUrl={imageUrl} />
        <DetailLink to={`/album/${track.album.id}`}>
          {track.album.name}
        </DetailLink>
        <Detail>{dayjs(addedAt).format('MMM D, YYYY')}</Detail>
        <Detail>{dayjs.duration(track.duration_ms).format('m:ss')}</Detail>
      </PlaylistTrack>
    );
  }

  if (props.variant === 'album') {
    const {index, track} = props;

    return (
      <SimpleTrack onDoubleClick={() => playTrack(track.id)}>
        <ControlsSection variant="standard" index={index} track={track} />
        <TitleSection variant="standard" track={track} />
        <Detail>{dayjs.duration(track.duration_ms).format('m:ss')}</Detail>
      </SimpleTrack>
    );
  }

  if (props.variant === 'artistTopTracks') {
    const {index, track} = props;
    const imageUrl: string | undefined = track.album.images[0].url;

    return (
      <ArtistTopTrack onDoubleClick={() => playTrack(track.id)}>
        <ControlsSection variant="standard" index={index} track={track} />
        <TitleSection
          variant="standard"
          track={track}
          imageUrl={imageUrl}
          hideArist={true}
        />
        <DetailLink to={`/album/${track.album.id}`}>
          {track.album.name}
        </DetailLink>
        <Detail>{dayjs.duration(track.duration_ms).format('m:ss')}</Detail>
      </ArtistTopTrack>
    );
  }

  if (props.variant === 'queue') {
    const {index, track} = props;

    return (
      <QueueTrack onDoubleClick={() => skipTo(index)}>
        <ControlsSection variant="queue" index={index} />
        <TitleSection variant="queue" track={track} />
        <Detail>{track.requester}</Detail>
      </QueueTrack>
    );
  }

  if (props.variant === 'savedTrack') {
    const {index} = props;
    const track = props.savedTrack.track;
    const addedAt = props.savedTrack.added_at;
    const imageUrl: string | undefined = track.album.images[0].url;

    return (
      <PlaylistTrack onDoubleClick={() => playTrack(track.id)}>
        <ControlsSection variant="standard" index={index} track={track} />
        <TitleSection variant="standard" track={track} imageUrl={imageUrl} />
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
