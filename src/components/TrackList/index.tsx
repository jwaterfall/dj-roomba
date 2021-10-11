import {FC, useState} from 'react';
import useSticky from '../../hooks/useSticky';
import Track from '../Track';
import ControlsSection from './ControlsSection';
import LikedSongsTrackList from './LikedSongsTrackList';

import {
  Background,
  BackgroundGradient,
  Content,
  SectionTitle,
  SimpleHeaderRow,
  PlaylistHeaderRow,
  QueueHeaderRow,
  Header,
  Copyrights,
  Copyright,
  SeeMore,
} from './styles';

interface PlaylistProps {
  variant: 'playlist';
  playlist: SpotifyApi.SinglePlaylistResponse;
  playlistTracks: SpotifyApi.PlaylistTrackObject[];
}

interface AlbumProps {
  variant: 'album';
  album: SpotifyApi.AlbumObjectFull;
  tracks: SpotifyApi.TrackObjectSimplified[];
}

interface ArtistTopTracksProps {
  variant: 'artistTopTracks';
  tracks: SpotifyApi.TrackObjectFull[];
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
  const [seeMore, setSeeMore] = useState(false);
  const {isStuck, ref} = useSticky();

  const handleSeeMore = () => {
    setSeeMore((oldValue) => !oldValue);
  };

  if (props.variant === 'playlist') {
    return (
      <Background>
        <BackgroundGradient />
        <Content>
          <ControlsSection variant="playlist" playlist={props.playlist} />
          <PlaylistHeaderRow ref={ref} isStuck={isStuck}>
            <Header>#</Header>
            <Header>title</Header>
            <Header>album</Header>
            <Header>date added</Header>
            <Header>length</Header>
          </PlaylistHeaderRow>

          {props.playlistTracks.map(
            (playlistTrack: SpotifyApi.PlaylistTrackObject, index) => (
              <Track
                variant="playlist"
                index={index + 1}
                key={index}
                playlistTrack={playlistTrack}
              />
            ),
          )}
        </Content>
      </Background>
    );
  }

  if (props.variant === 'album') {
    return (
      <Background>
        <BackgroundGradient />
        <Content>
          <ControlsSection variant="album" album={props.album} />
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
    return (
      <Background>
        <BackgroundGradient />
        <Content>
          <SectionTitle>Popular</SectionTitle>
          {(seeMore ? props.tracks : props.tracks.slice(0, 5)).map(
            (track, index) => (
              <Track
                variant="artistTopTracks"
                index={index + 1}
                key={index}
                track={track}
              />
            ),
          )}
          <SeeMore onClick={handleSeeMore}>
            {seeMore ? 'see less' : 'see more'}
          </SeeMore>
        </Content>
      </Background>
    );
  }

  if (props.variant === 'queue') {
    return (
      <Background>
        <BackgroundGradient />
        <Content>
          <QueueHeaderRow ref={ref} isStuck={isStuck}>
            <Header>#</Header>
            <Header>title</Header>
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
