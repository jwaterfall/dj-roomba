import { FC } from 'react';

import AlbumCard from './AlbumCard';
import ArtistCard from './ArtistCard';
import CategoryCard from './CategoryCard';
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

interface CategoryProps {
  variant: 'category';
  category: SpotifyApi.CategoryObject;
}

type Props = AlbumProps | ArtistProps | PlaylistProps | CategoryProps;

const Card: FC<Props> = (props) => {
  if (props.variant === 'album')
    return <AlbumCard album={props.album} artistPage={props.artistPage} />;

  if (props.variant === 'artist') return <ArtistCard artist={props.artist} />;

  if (props.variant === 'playlist') return <PlaylistCard playlist={props.playlist} />;

  if (props.variant === 'category') return <CategoryCard category={props.category} />;

  return <></>;
};

export default Card;
