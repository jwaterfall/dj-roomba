import { FC } from 'react';

import Skeleton from '../Skeleton';
import TitleSectionSkeleton from './TitleSection/TitleSectionSkeleton';
import {
  AlbumTrackContainer,
  ArtistTopTrackContainer,
  PlaylistOrSavedTrackContainer,
} from './styles';

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

type Props = PlaylistProps | AlbumProps | ArtistTopTracksProps | SavedTracksProps;

const TrackSkeleton: FC<Props> = (props) => {
  if (props.variant === 'playlist') {
    return (
      <PlaylistOrSavedTrackContainer skeleton={true}>
        <Skeleton variant="rect" width="1.5rem" height="1rem" />
        <TitleSectionSkeleton />
        <Skeleton variant="rect" width="8rem" height="1rem" />
        <Skeleton variant="rect" width="6rem" height="1rem" />
        <Skeleton variant="rect" width="2rem" height="1rem" />
      </PlaylistOrSavedTrackContainer>
    );
  }

  if (props.variant === 'album') {
    return (
      <AlbumTrackContainer skeleton={true}>
        <Skeleton variant="rect" width="1.5rem" height="1rem" />
        <TitleSectionSkeleton hideImage={true} />
        <Skeleton variant="rect" width="2rem" height="1rem" />
      </AlbumTrackContainer>
    );
  }

  if (props.variant === 'artistTopTracks') {
    return (
      <ArtistTopTrackContainer skeleton={true}>
        <Skeleton variant="rect" width="1.5rem" height="1rem" />
        <TitleSectionSkeleton hideArist={true} />
        <Skeleton variant="rect" width="8rem" height="1rem" />
        <Skeleton variant="rect" width="2rem" height="1rem" />
      </ArtistTopTrackContainer>
    );
  }

  if (props.variant === 'savedTrack') {
    return (
      <PlaylistOrSavedTrackContainer skeleton={true}>
        <Skeleton variant="rect" width="1.5rem" height="1rem" />
        <TitleSectionSkeleton />
        <Skeleton variant="rect" width="8rem" height="1rem" />
        <Skeleton variant="rect" width="6rem" height="1rem" />
        <Skeleton variant="rect" width="2rem" height="1rem" />
      </PlaylistOrSavedTrackContainer>
    );
  }

  return <></>;
};

export default TrackSkeleton;
