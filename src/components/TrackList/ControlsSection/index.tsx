import {FC} from 'react';
import usePlaybackControls from '../../../hooks/usePlaybackControls';

import {ReactComponent as Play} from '../../../assets/icons/play.svg';
import {ReactComponent as QueueAdd} from '../../../assets/icons/queue-add.svg';

import {Container} from './styles';

interface PlaylistProps {
  variant: 'playlist';
  playlist: SpotifyApi.SinglePlaylistResponse;
}

interface AlbumProps {
  variant: 'album';
  album: SpotifyApi.AlbumObjectSimplified;
}

type Props = PlaylistProps | AlbumProps;

const ControlsSection: FC<Props> = (props) => {
  const {playPlaylist, playAlbum} = usePlaybackControls();

  if (props.variant === 'playlist') {
    return (
      <Container>
        <Play onClick={() => playPlaylist(props.playlist)} />
        <QueueAdd onClick={() => playPlaylist(props.playlist, true)} />
      </Container>
    );
  }

  if (props.variant === 'album') {
    return (
      <Container>
        <Play onClick={() => playAlbum(props.album)} />
        <QueueAdd onClick={() => playAlbum(props.album, true)} />
      </Container>
    );
  }

  return <></>;
};

export default ControlsSection;
