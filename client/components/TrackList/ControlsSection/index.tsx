import { FC } from 'react';
import { MdPlayArrow, MdPlaylistAdd } from 'react-icons/md';

import usePlaybackControls from '../../../hooks/usePlaybackControls';
import { Container } from './styles';

interface PlaylistProps {
  variant: 'playlist';
  playlistId: string;
}

interface AlbumProps {
  variant: 'album';
  albumId: string;
}

type Props = PlaylistProps | AlbumProps;

const ControlsSection: FC<Props> = (props) => {
  const { playPlaylist, playAlbum } = usePlaybackControls();

  if (props.variant === 'playlist') {
    return (
      <Container>
        <MdPlayArrow onClick={() => playPlaylist(props.playlistId)} />
        <MdPlaylistAdd onClick={() => playPlaylist(props.playlistId, true)} />
      </Container>
    );
  }

  if (props.variant === 'album') {
    return (
      <Container>
        <MdPlayArrow onClick={() => playAlbum(props.albumId)} />
        <MdPlaylistAdd onClick={() => playAlbum(props.albumId, true)} />
      </Container>
    );
  }

  return <></>;
};

export default ControlsSection;
