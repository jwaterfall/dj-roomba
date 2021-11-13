import { FC } from 'react';
import usePlaybackControls from '../../../hooks/usePlaybackControls';

import { ReactComponent as Play } from '../../../assets/icons/play.svg';
import { ReactComponent as QueueAdd } from '../../../assets/icons/queue-add.svg';

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
        <Play onClick={() => playPlaylist(props.playlistId)} />
        <QueueAdd onClick={() => playPlaylist(props.playlistId, true)} />
      </Container>
    );
  }

  if (props.variant === 'album') {
    return (
      <Container>
        <Play onClick={() => playAlbum(props.albumId)} />
        <QueueAdd onClick={() => playAlbum(props.albumId, true)} />
      </Container>
    );
  }

  return <></>;
};

export default ControlsSection;
