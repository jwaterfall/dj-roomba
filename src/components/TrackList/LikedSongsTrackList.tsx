import { FC, Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import useSticky from '../../hooks/useSticky';
import useLikedSongs from '../../queries/useLikedSongs';
import Track from '../Track';
import TrackSkeleton from '../Track/TrackSkeleton';
import {
  Background,
  BackgroundGradient,
  Content,
  Header,
  PlaylistHeaderRow,
} from './styles';

const LikedSongsTrackList: FC = () => {
  const { data, hasNextPage, fetchNextPage } = useLikedSongs(25);
  const { isStuck, ref: isStuckRef } = useSticky();
  const { ref: inViewRef, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <Background>
      <BackgroundGradient />
      <Content>
        <PlaylistHeaderRow ref={isStuckRef} isStuck={isStuck}>
          <Header>#</Header>
          <Header>title</Header>
          <Header>album</Header>
          <Header>date added</Header>
          <Header>length</Header>
        </PlaylistHeaderRow>
        {data?.pages.map((page, pageIndex) => (
          <Fragment key={pageIndex}>
            {page.results.map((savedTrack, index) => (
              <Track
                variant="savedTrack"
                index={pageIndex * 25 + index + 1}
                key={index}
                savedTrack={savedTrack}
              />
            ))}
          </Fragment>
        ))}
        <div ref={inViewRef}>
          {hasNextPage &&
            [...Array(25)].map((_, i) => (
              <TrackSkeleton variant="savedTrack" key={i} />
            ))}
        </div>
      </Content>
    </Background>
  );
};

export default LikedSongsTrackList;
