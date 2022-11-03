import { FC, Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import usePlaylistTracks from '../../hooks/queries/usePlaylistTracks';
import useSticky from '../../hooks/useSticky';
import Track from '../Track';
import TrackSkeleton from '../Track/TrackSkeleton';
import ControlsSection from './ControlsSection';
import {
  Background,
  BackgroundGradient,
  Content,
  Header,
  PlaylistHeaderRow,
} from './styles';

interface Props {
  playlistId: string;
}

const PlaylistTrackList: FC<Props> = ({ playlistId }) => {
  const { data, hasNextPage, fetchNextPage } = usePlaylistTracks(
    playlistId,
    25,
  );
  const { isStuck, ref: isStuckRef } = useSticky();
  const { ref: inViewRef, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <Background>
      <BackgroundGradient />
      <Content>
        <ControlsSection variant="playlist" playlistId={playlistId} />
        <PlaylistHeaderRow ref={isStuckRef} isStuck={isStuck}>
          <Header>#</Header>
          <Header>title</Header>
          <Header>album</Header>
          <Header>date added</Header>
          <Header>length</Header>
        </PlaylistHeaderRow>
        {data?.pages.map((page, pageIndex) => (
          <Fragment key={pageIndex}>
            {page.results.map((playlistTrack, index) => (
              <Track
                variant="playlist"
                index={pageIndex * 25 + index + 1}
                key={playlistTrack.track.id}
                playlistTrack={playlistTrack}
              />
            ))}
          </Fragment>
        ))}
        <div ref={inViewRef}>
          {hasNextPage
            && [...Array(25)].map((_, i) => (
              <TrackSkeleton variant="playlist" key={i} />
            ))}
        </div>
      </Content>
    </Background>
  );
};

export default PlaylistTrackList;
