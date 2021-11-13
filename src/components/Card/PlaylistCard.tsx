import { FC } from 'react';
import dayjs from 'dayjs';
import usePlaybackControls from '../../hooks/usePlaybackControls';

import {
  Card,
  ImageContainer,
  Image,
  PlayButton,
  Title,
  Description,
  DescriptionItem,
} from './styles';

import placeholder from '../../assets/images/placeholder.png';
import { ReactComponent as Play } from '../../assets/icons/play.svg';

interface Props {
  playlist: SpotifyApi.PlaylistObjectSimplified;
}

const PlaylistCard: FC<Props> = ({ playlist }) => {
  const imageUrl: string | undefined = playlist.images[0]?.url;
  const { playPlaylist } = usePlaybackControls();

  return (
    <Card to={`/playlist/${playlist.id}`}>
      <ImageContainer>
        <Image src={imageUrl || placeholder} />
        <PlayButton
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            playPlaylist(playlist.id);
          }}
        >
          <Play />
        </PlayButton>
      </ImageContainer>
      <Title>{playlist.name}</Title>
      <Description>
        {playlist.description?.replace(/<[^>]+>/g, '') ||
          `By ${playlist.owner.display_name}`}
      </Description>
    </Card>
  );
};

export default PlaylistCard;
