import dayjs from 'dayjs';
import { FC } from 'react';
import { MdPlayArrow } from 'react-icons/md';

import usePlaybackControls from '../../hooks/usePlaybackControls';
import placeholder from '../../images/placeholder.png';
import NavLink from '../NavLink';
import {
  Card,
  Description,
  DescriptionItem,
  Image,
  ImageContainer,
  PlayButton,
  Title,
} from './styles';

interface Props {
  playlist: SpotifyApi.PlaylistObjectSimplified;
}

const PlaylistCard: FC<Props> = ({ playlist }) => {
  const imageUrl: string | undefined = playlist.images[0]?.url;
  const { playPlaylist } = usePlaybackControls();

  return (
    <NavLink href={`/playlists/${playlist.id}`} passHref>
      <Card>
        <ImageContainer>
          <Image src={imageUrl || placeholder} />
          <PlayButton
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              playPlaylist(playlist.id);
            }}
          >
            <MdPlayArrow />
          </PlayButton>
        </ImageContainer>
        <Title>{playlist.name}</Title>
        <Description>
          {playlist.description?.replace(/<[^>]+>/g, '') ||
            `By ${playlist.owner.display_name}`}
        </Description>
      </Card>
    </NavLink>
  );
};

export default PlaylistCard;
