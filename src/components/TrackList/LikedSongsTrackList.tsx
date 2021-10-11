import {FC, Fragment, useEffect, useRef, useCallback} from 'react';
import useSticky from '../../hooks/useSticky';
import useLikedSongs from '../../queries/useLikedSongs';
import Track from '../Track';
import {useInView} from 'react-intersection-observer';

import {
  Background,
  BackgroundGradient,
  Content,
  PlaylistHeaderRow,
  Header,
} from './styles';
import TrackSkeleton from '../Track/TrackSkeleton';

const LikedSongsTrackList: FC = () => {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useLikedSongs();
  const {isStuck, ref: isStuckRef} = useSticky();
  const {ref: inViewRef, inView} = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  });

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
