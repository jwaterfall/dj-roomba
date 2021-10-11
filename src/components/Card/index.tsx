import {FC} from 'react';
import AlbumCard from './AlbumCard';

interface AlbumProps {
  variant: 'album';
  album: SpotifyApi.AlbumObjectSimplified;
}

type Props = AlbumProps;

const Card: FC<Props> = (props) => (
  <>{props.variant === 'album' && <AlbumCard album={props.album} />}</>
);

export default Card;
