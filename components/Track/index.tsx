import dayjs from 'dayjs';
import { FC } from 'react';
import { VideoSearchResult } from 'yt-search';

import usePlaybackControls from '../../hooks/usePlaybackControls';
import NavLink from '../NavLink';
import ControlsSection from './ControlsSection';
import TitleSection from './TitleSection';
import {
  ArtistTopTrack,
  Detail,
  DetailLink,
  PlaylistTrack,
  QueueTrack,
  SearchTrack,
  SimpleTrack,
} from './styles';

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
  | PlaylistProps
  | AlbumProps
  | ArtistTopTracksProps
  | QueueProps
  | SavedTracksProps
  | SearchProps
  | YoutubeSearchProps;

const Track: FC<Props> = (props) => {
  const { playYoutubeVideo, playTrack, skipTo } = usePlaybackControls();

  if (props.variant === 'playlist') {
    const { index } = props;
    const track = props.playlistTrack.track;
    const addedAt = props.playlistTrack.added_at;
    const url = track.album.images[0].url ?? '/images/placeholder.png';
    const width = track.album.images[0]?.width ?? 50;
    const height = track.album.images[0]?.height ?? 50;

    return (
      <PlaylistTrack onDoubleClick={() => playTrack(track.id)}>
        <ControlsSection variant="standard" index={index} track={track} />
        <TitleSection
          variant="standard"
          track={track}
          image={{ url, width, height }}
        />
        <NavLink href={`/albums/${track.album.id}`} passHref>
          <DetailLink>{track.album.name}</DetailLink>
        </NavLink>
        <Detail>{dayjs(addedAt).format('MMM D, YYYY')}</Detail>
        <Detail>{dayjs.duration(track.duration_ms).format('m:ss')}</Detail>
      </PlaylistTrack>
    );
  }

  if (props.variant === 'album') {
    const { index, track } = props;

    return (
      <SimpleTrack onDoubleClick={() => playTrack(track.id)}>
        <ControlsSection variant="standard" index={index} track={track} />
        <TitleSection variant="standard" track={track} />
        <Detail>{dayjs.duration(track.duration_ms).format('m:ss')}</Detail>
      </SimpleTrack>
    );
  }

  if (props.variant === 'artistTopTracks') {
    const { index, track } = props;
    const url = track.album.images[0].url ?? '/images/placeholder.png';
    const width = track.album.images[0]?.width ?? 50;
    const height = track.album.images[0]?.height ?? 50;

    return (
      <ArtistTopTrack onDoubleClick={() => playTrack(track.id)}>
        <ControlsSection variant="standard" index={index} track={track} />
        <TitleSection
          variant="standard"
          track={track}
          image={{ url, width, height }}
          hideArist={true}
        />
        <NavLink href={`/albums/${track.album.id}`} passHref>
          <DetailLink>{track.album.name}</DetailLink>
        </NavLink>
        <Detail>{dayjs.duration(track.duration_ms).format('m:ss')}</Detail>
      </ArtistTopTrack>
    );
  }

  if (props.variant === 'queue') {
    const { index, track } = props;

    return (
      <QueueTrack onDoubleClick={() => skipTo(index)}>
        <ControlsSection variant="queue" index={index} />
        <TitleSection variant="queue" track={track} />
        <Detail>{track.requester}</Detail>
      </QueueTrack>
    );
  }

  if (props.variant === 'savedTrack') {
    const { index } = props;
    const track = props.savedTrack.track;
    const addedAt = props.savedTrack.added_at;
    const url = track.album.images[0].url ?? '/images/placeholder.png';
    const width = track.album.images[0]?.width ?? 50;
    const height = track.album.images[0]?.height ?? 50;

    return (
      <PlaylistTrack onDoubleClick={() => playTrack(track.id)}>
        <ControlsSection variant="standard" index={index} track={track} />
        <TitleSection
          variant="standard"
          track={track}
          image={{ url, width, height }}
        />
        <NavLink href={`/albums/${track.album.id}`} passHref>
          <DetailLink>{track.album.name}</DetailLink>
        </NavLink>
        <Detail>{dayjs(addedAt).format('MMM D, YYYY')}</Detail>
        <Detail>{dayjs.duration(track.duration_ms).format('m:ss')}</Detail>
      </PlaylistTrack>
    );
  }

  if (props.variant === 'search') {
    const { index, track } = props;
    const url = track.album.images[0].url ?? '/images/placeholder.png';
    const width = track.album.images[0]?.width ?? 50;
    const height = track.album.images[0]?.height ?? 50;

    return (
      <SearchTrack onDoubleClick={() => playTrack(track.id)}>
        <ControlsSection variant="standard" index={index} track={track} />
        <TitleSection
          variant="standard"
          track={track}
          image={{ url, width, height }}
        />
        <Detail>{dayjs.duration(track.duration_ms).format('m:ss')}</Detail>
      </SearchTrack>
    );
  }

  if (props.variant === 'youtubeSearch') {
    const { index, video } = props;

    return (
      <SearchTrack onDoubleClick={() => playYoutubeVideo(video.videoId)}>
        <ControlsSection variant="youtube" index={index} video={video} />
        <TitleSection variant="youtube" video={video} />
        <Detail>{video.timestamp}</Detail>
      </SearchTrack>
    );
  }

  return <></>;
};

export default Track;
