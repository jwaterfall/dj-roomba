import { FC } from 'react';

import AlbumCard from './AlbumCard';
import ArtistCard from './ArtistCard';
import PlaylistCard from './PlaylistCard';

interface AlbumProps {
  variant: 'album';
  album: SpotifyApi.AlbumObjectSimplified;
  artistPage?: boolean;
}

interface ArtistProps {
  variant: 'artist';
  artist: SpotifyApi.ArtistObjectFull;
}

interface PlaylistProps {
  variant: 'playlist';
  playlist: SpotifyApi.PlaylistObjectSimplified;
}

type Props = AlbumProps | ArtistProps | PlaylistProps;

const Card: FC<Props> = (props) => {
  if (props.variant === 'album')
    return <AlbumCard album={props.album} artistPage={props.artistPage} />;

  if (props.variant === 'artist') return <ArtistCard artist={props.artist} />;

  if (props.variant === 'playlist')
    return <PlaylistCard playlist={props.playlist} />;

  return <></>;
};

export default Card;
