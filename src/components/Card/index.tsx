import {FC} from 'react';
import AlbumCard from './AlbumCard';

interface AlbumProps {
  type: 'album';
  album: SpotifyApi.AlbumObjectSimplified;
}

type Props = AlbumProps;

const Card: FC<Props> = (props) => (
  <>{props.type === 'album' && <AlbumCard album={props.album} />}</>
);

export default Card;
