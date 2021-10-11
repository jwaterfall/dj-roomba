import {FC} from 'react';
import TitleSectionSkeleton from './TitleSection/TitleSectionSkeleton';
import Skeleton from '../Skeleton';
import {SimpleTrack, PlaylistTrack, ArtistTopTrack} from './styles';

interface PlaylistProps {
  variant: 'playlist';
}

interface AlbumProps {
  variant: 'album';
}

interface ArtistTopTracksProps {
  variant: 'artistTopTracks';
}

interface SavedTracksProps {
  variant: 'savedTrack';
}

type Props =
  | PlaylistProps
  | AlbumProps
  | ArtistTopTracksProps
  | SavedTracksProps;

const TrackSkeleton: FC<Props> = (props) => {
  if (props.variant === 'playlist') {
    return (
      <PlaylistTrack skeleton={true}>
        <Skeleton variant="rect" width="1.5rem" height="1rem" />
        <TitleSectionSkeleton />
        <Skeleton variant="rect" width="8rem" height="1rem" />
        <Skeleton variant="rect" width="6rem" height="1rem" />
        <Skeleton variant="rect" width="2rem" height="1rem" />
      </PlaylistTrack>
    );
  }

  if (props.variant === 'album') {
    return (
      <SimpleTrack skeleton={true}>
        <Skeleton variant="rect" width="1.5rem" height="1rem" />
        <TitleSectionSkeleton hideImage={true} />
        <Skeleton variant="rect" width="2rem" height="1rem" />
      </SimpleTrack>
    );
  }

  if (props.variant === 'artistTopTracks') {
    return (
      <ArtistTopTrack skeleton={true}>
        <Skeleton variant="rect" width="1.5rem" height="1rem" />
        <TitleSectionSkeleton hideArist={true} />
        <Skeleton variant="rect" width="8rem" height="1rem" />
        <Skeleton variant="rect" width="2rem" height="1rem" />
      </ArtistTopTrack>
    );
  }

  if (props.variant === 'savedTrack') {
    return (
      <PlaylistTrack skeleton={true}>
        <Skeleton variant="rect" width="1.5rem" height="1rem" />
        <TitleSectionSkeleton />
        <Skeleton variant="rect" width="8rem" height="1rem" />
        <Skeleton variant="rect" width="6rem" height="1rem" />
        <Skeleton variant="rect" width="2rem" height="1rem" />
      </PlaylistTrack>
    );
  }

  return <></>;
};

export default TrackSkeleton;
