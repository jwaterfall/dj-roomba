import { FC } from 'react';
import { VideoSearchResult } from 'yt-search';

import { ReactComponent as Play } from '../../../assets/icons/play.svg';
import { ReactComponent as QueueAdd } from '../../../assets/icons/queue-add.svg';
import { ReactComponent as Remove } from '../../../assets/icons/remove.svg';
import usePlaybackControls from '../../../hooks/usePlaybackControls';
import { IconList, Index } from './styles';

interface StandardProps {
  variant: 'standard';
  track: SpotifyApi.TrackObjectSimplified;
  index: number;
}

interface YoutubeProps {
  variant: 'youtube';
  video: VideoSearchResult;
  index: number;
}

interface QueueProps {
  variant: 'queue';
  index: number;
}

type Props = StandardProps | YoutubeProps | QueueProps;

const ControlsSection: FC<Props> = (props) => {
  const { playYoutubeVideo, playTrack, skipTo, remove } = usePlaybackControls();

  if (props.variant === 'standard') {
    return (
      <div>
        <IconList>
          <Play onClick={() => playTrack(props.track.id)} />
          <QueueAdd onClick={() => playTrack(props.track.id, true)} />
        </IconList>
        <Index>{props.index}</Index>
      </div>
    );
  }

  if (props.variant === 'youtube') {
    return (
      <div>
        <IconList>
          <Play onClick={() => playYoutubeVideo(props.video.videoId)} />
          <QueueAdd
            onClick={() => playYoutubeVideo(props.video.videoId, true)}
          />
        </IconList>
        <Index>{props.index}</Index>
      </div>
    );
  }

  if (props.variant === 'queue') {
    return (
      <div>
        <IconList>
          <Play onClick={() => skipTo(props.index)} />
          <Remove onClick={() => remove(props.index)} />
        </IconList>
        <Index>{props.index}</Index>
      </div>
    );
  }

  return <></>;
};

export default ControlsSection;
