import { FC } from 'react';
import { VideoSearchResult } from 'yt-search';

import usePlaybackControls from '../../hooks/usePlaybackControls';
import ControlsSection from './ControlsSection';
import TitleSection from './TitleSection';
import { Detail, SearchTrackContainer } from './styles';

interface Props {
  index: number;
  video: VideoSearchResult;
}

const YoutubeSearchTrack: FC<Props> = ({ index, video }) => {
  const { playYoutubeVideo } = usePlaybackControls();

  return (
    <SearchTrackContainer onDoubleClick={() => playYoutubeVideo(video.videoId)}>
      <ControlsSection variant="youtube" index={index} video={video} />
      <TitleSection variant="youtube" video={video} />
      <Detail>{video.timestamp}</Detail>
    </SearchTrackContainer>
  );
};

export default YoutubeSearchTrack;
