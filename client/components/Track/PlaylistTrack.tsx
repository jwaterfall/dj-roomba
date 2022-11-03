import dayjs from 'dayjs';
import { FC } from 'react';

import usePlaybackControls from '../../hooks/usePlaybackControls';
import NavLink from '../NavLink';
import ControlsSection from './ControlsSection';
import TitleSection from './TitleSection';
import { Detail, DetailLink, PlaylistOrSavedTrackContainer } from './styles';

interface Props {
  index: number;
  playlistTrack: SpotifyApi.PlaylistTrackObject;
}

const PlaylistTrack: FC<Props> = ({ index, playlistTrack }) => {
  const { playTrack } = usePlaybackControls();

  const { track } = playlistTrack;
  const addedAt = playlistTrack.added_at;
  const url = track.album.images[0].url ?? '/images/placeholder.png';
  const width = track.album.images[0]?.width ?? 50;
  const height = track.album.images[0]?.height ?? 50;

  return (
    <PlaylistOrSavedTrackContainer onDoubleClick={() => playTrack(track.id)}>
      <ControlsSection variant="standard" index={index} track={track} />
      <TitleSection variant="standard" track={track} image={{ url, width, height }} />
      <NavLink href={`/albums/${track.album.id}`} passHref>
        <DetailLink>{track.album.name}</DetailLink>
      </NavLink>
      <Detail>{dayjs(addedAt).format('MMM D, YYYY')}</Detail>
      <Detail>{dayjs.duration(track.duration_ms).format('m:ss')}</Detail>
    </PlaylistOrSavedTrackContainer>
  );
};

export default PlaylistTrack;
