import dayjs from 'dayjs';
import { FC } from 'react';

import usePlaybackControls from '../../hooks/usePlaybackControls';
import ControlsSection from './ControlsSection';
import TitleSection from './TitleSection';
import { Detail, SearchTrackContainer } from './styles';

interface Props {
  index: number;
  track: SpotifyApi.TrackObjectFull;
}

const SearchTrack: FC<Props> = ({ index, track }) => {
  const { playTrack } = usePlaybackControls();

  const url = track.album.images[0].url ?? '/images/placeholder.png';
  const width = track.album.images[0]?.width ?? 50;
  const height = track.album.images[0]?.height ?? 50;

  return (
    <SearchTrackContainer onDoubleClick={() => playTrack(track.id)}>
      <ControlsSection variant="standard" index={index} track={track} />
      <TitleSection variant="standard" track={track} image={{ url, width, height }} />
      <Detail>{dayjs.duration(track.duration_ms).format('m:ss')}</Detail>
    </SearchTrackContainer>
  );
};

export default SearchTrack;
