import {FC} from 'react';
import AlbumCard from './AlbumCard';
import PlaylistCard from './PlaylistCard';

interface AlbumProps {
  variant: 'album';
  album: SpotifyApi.AlbumObjectSimplified;
  artistPage?: boolean;
}

interface PlaylistProps {
  variant: 'playlist';
  playlist: SpotifyApi.PlaylistObjectSimplified;
}

type Props = AlbumProps | PlaylistProps;

const Card: FC<Props> = (props) => {
  if (props.variant === 'album')
    return <AlbumCard album={props.album} artistPage={props.artistPage} />;

  if (props.variant === 'playlist')
    return <PlaylistCard playlist={props.playlist} />;

  return <></>;
};

export default Card;
