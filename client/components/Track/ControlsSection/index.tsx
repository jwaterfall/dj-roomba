import { FC } from 'react';
import { MdPlayArrow, MdPlaylistAdd, MdRemove } from 'react-icons/md';
import { VideoSearchResult } from 'yt-search';

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
  const {
    playYoutubeVideo, playTrack, skipTo, remove,
  } = usePlaybackControls();

  if (props.variant === 'standard') {
    return (
      <div>
        <IconList>
          <MdPlayArrow onClick={() => playTrack(props.track.id)} />
          <MdPlaylistAdd onClick={() => playTrack(props.track.id, true)} />
        </IconList>
        <Index>{props.index}</Index>
      </div>
    );
  }

  if (props.variant === 'youtube') {
    return (
      <div>
        <IconList>
          <MdPlayArrow onClick={() => playYoutubeVideo(props.video.videoId)} />
          <MdPlaylistAdd
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
          <MdPlayArrow onClick={() => skipTo(props.index)} />
          <MdRemove onClick={() => remove(props.index)} />
        </IconList>
        <Index>{props.index}</Index>
      </div>
    );
  }

  return <></>;
};

export default ControlsSection;
