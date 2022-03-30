import dayjs from 'dayjs';
import { FC } from 'react';

import usePlaybackControls from '../../hooks/usePlaybackControls';
import ControlsSection from './ControlsSection';
import TitleSection from './TitleSection';
import { AlbumTrackContainer, Detail } from './styles';

interface Props {
  index: number;
  track: SpotifyApi.TrackObjectSimplified;
}

const AlbumTrack: FC<Props> = ({ index, track }) => {
  const { playTrack } = usePlaybackControls();

  return (
    <AlbumTrackContainer onDoubleClick={() => playTrack(track.id)}>
      <ControlsSection variant="standard" index={index} track={track} />
      <TitleSection variant="standard" track={track} />
      <Detail>{dayjs.duration(track.duration_ms).format('m:ss')}</Detail>
    </AlbumTrackContainer>
  );
};

export default AlbumTrack;
