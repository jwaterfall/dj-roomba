import { FC, useState } from 'react';
import useSticky from '../../hooks/useSticky';
import Track from '../Track';
import ControlsSection from './ControlsSection';
import PlaylistTrackList from './PlaylistTrackList';
import LikedSongsTrackList from './LikedSongsTrackList';
import ArtistTopTrackList from './ArtistTopTrackList';

import {
  Background,
  BackgroundGradient,
  Content,
  SimpleHeaderRow,
  QueueHeaderRow,
  Header,
  Copyrights,
  Copyright,
} from './styles';

interface PlaylistProps {
  variant: 'playlist';
  playlistId: string;
}

interface AlbumProps {
  variant: 'album';
  album: SpotifyApi.AlbumObjectFull;
  tracks: SpotifyApi.TrackObjectSimplified[];
}

interface ArtistTopTracksProps {
  variant: 'artistTopTracks';
  artistId: string;
}

interface QueueProps {
  variant: 'queue';
  tracks: QueuedTrack[];
}

interface SavedTracksProps {
  variant: 'savedTracks';
}

type Props =
  | PlaylistProps
  | AlbumProps
  | ArtistTopTracksProps
  | QueueProps
  | SavedTracksProps;

const TrackList: FC<Props> = (props) => {
  const { isStuck, ref } = useSticky();
  if (props.variant === 'playlist') {
    return <PlaylistTrackList playlistId={props.playlistId} />;
  }

  if (props.variant === 'album') {
    return (
      <Background>
        <BackgroundGradient />
        <Content>
          <ControlsSection variant="album" albumId={props.album.id} />
          <SimpleHeaderRow ref={ref} isStuck={isStuck}>
            <Header>#</Header>
            <Header>title</Header>
            <Header>length</Header>
          </SimpleHeaderRow>

          {props.tracks.map((track, index) => (
            <Track
              variant="album"
              index={index + 1}
              key={index}
              track={track}
            />
          ))}
          <Copyrights>
            {props.album.copyrights.map((copyright) => (
              <Copyright>
                {copyright.type === 'C' && '© '}
                {copyright.type === 'P' && '℗ '}
                {copyright.text.replaceAll('©', '').replaceAll('℗', '')}
              </Copyright>
            ))}
          </Copyrights>
        </Content>
      </Background>
    );
  }

  if (props.variant === 'artistTopTracks') {
    return <ArtistTopTrackList artistId={props.artistId} />;
  }

  if (props.variant === 'queue') {
    return (
      <Background>
        <BackgroundGradient />
        <Content>
          <QueueHeaderRow ref={ref} isStuck={isStuck}>
            <Header>#</Header>
            <Header>title</Header>
            <Header>added by</Header>
          </QueueHeaderRow>
          {props.tracks.map((track, index) => (
            <Track
              variant="queue"
              index={index + 1}
              key={index}
              track={track}
            />
          ))}
        </Content>
      </Background>
    );
  }

  if (props.variant === 'savedTracks') {
    return <LikedSongsTrackList />;
  }

  return <></>;
};

export default TrackList;
