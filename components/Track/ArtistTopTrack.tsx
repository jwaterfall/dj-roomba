import dayjs from 'dayjs';
import { FC } from 'react';

import usePlaybackControls from '../../hooks/usePlaybackControls';
import NavLink from '../NavLink';
import ControlsSection from './ControlsSection';
import TitleSection from './TitleSection';
import { ArtistTopTrackContainer, Detail, DetailLink } from './styles';

interface Props {
  index: number;
  track: SpotifyApi.TrackObjectFull;
}

const ArtistTopTrack: FC<Props> = ({ index, track }) => {
  const { playTrack } = usePlaybackControls();

  const url = track.album.images[0].url ?? '/images/placeholder.png';
  const width = track.album.images[0]?.width ?? 50;
  const height = track.album.images[0]?.height ?? 50;

  return (
    <ArtistTopTrackContainer onDoubleClick={() => playTrack(track.id)}>
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
    </ArtistTopTrackContainer>
  );
};

export default ArtistTopTrack;
