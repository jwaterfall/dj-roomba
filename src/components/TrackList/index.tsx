import {FC, useState} from 'react';
import useSticky from '../../hooks/useSticky';
import Track from '../Track';
import ControlsSection from './ControlsSection';

import {
  Background,
  BackgroundGradient,
  Content,
  SectionTitle,
  SimpleHeaderRow,
  PlaylistHeaderRow,
  Header,
  Copyrights,
  Copyright,
  SeeMore,
} from './styles';

interface PlaylistProps {
  type: 'playlist';
  playlistTracks: SpotifyApi.PlaylistTrackObject[];
}

interface AlbumProps {
  type: 'album';
  tracks: SpotifyApi.TrackObjectSimplified[];
  copyrights: SpotifyApi.CopyrightObject[];
}

interface ArtistTopTracksProps {
  type: 'artistTopTracks';
  tracks: SpotifyApi.TrackObjectFull[];
}

interface SavedTracksProps {
  type: 'savedTracks';
  savedTracks: SpotifyApi.SavedTrackObject[];
}

type Props =
  | PlaylistProps
  | AlbumProps
  | ArtistTopTracksProps
  | SavedTracksProps;

const TrackList: FC<Props> = (props) => {
  const [seeMore, setSeeMore] = useState(false);
  const {isStuck, ref} = useSticky();

  const handleSeeMore = () => {
    setSeeMore((oldValue) => !oldValue);
  };

  if (props.type === 'playlist') {
    const tracks = props.playlistTracks.map(
      (playlistTrack) => playlistTrack.track,
    );

    return (
      <Background>
        <BackgroundGradient />
        <Content>
          <ControlsSection tracks={tracks} />
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
                type="playlist"
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

  if (props.type === 'album') {
    return (
      <Background>
        <BackgroundGradient />
        <Content>
          <ControlsSection tracks={props.tracks} />
          <SimpleHeaderRow ref={ref} isStuck={isStuck}>
            <Header>#</Header>
            <Header>title</Header>
            <Header>length</Header>
          </SimpleHeaderRow>

          {props.tracks.map((track, index) => (
            <Track type="album" index={index + 1} key={index} track={track} />
          ))}
          <Copyrights>
            {props.copyrights.map((copyright) => (
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

  if (props.type === 'artistTopTracks') {
    return (
      <Background>
        <BackgroundGradient />
        <Content>
          <SectionTitle>Popular</SectionTitle>
          {(seeMore ? props.tracks : props.tracks.slice(0, 5)).map(
            (track, index) => (
              <Track
                type="artistTopTracks"
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

  if (props.type === 'savedTracks') {
    return (
      <Background>
        <BackgroundGradient />
        <Content>
          <PlaylistHeaderRow ref={ref} isStuck={isStuck}>
            <Header>#</Header>
            <Header>title</Header>
            <Header>album</Header>
            <Header>date added</Header>
            <Header>length</Header>
          </PlaylistHeaderRow>

          {props.savedTracks.map((savedTrack, index) => (
            <Track
              type="savedTrack"
              index={index + 1}
              key={index}
              savedTrack={savedTrack}
            />
          ))}
        </Content>
      </Background>
    );
  }

  return <></>;
};

export default TrackList;
