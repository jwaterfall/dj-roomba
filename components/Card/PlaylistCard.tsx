import Image from 'next/image';
import { FC } from 'react';
import { MdPlayArrow } from 'react-icons/md';

import usePlaybackControls from '../../hooks/usePlaybackControls';
import NavLink from '../NavLink';
import { Card, Description, ImageContainer, PlayButton, Title } from './styles';

interface Props {
  playlist: SpotifyApi.PlaylistObjectSimplified;
}

const PlaylistCard: FC<Props> = ({ playlist }) => {
  const { playPlaylist } = usePlaybackControls();
  const url = playlist.images[0]?.url ?? '/images/placeholder.png';
  const width = playlist.images[0]?.width ?? 50;
  const height = playlist.images[0]?.height ?? 50;

  return (
    <NavLink href={`/playlists/${playlist.id}`} passHref>
      <Card>
        <ImageContainer>
          <Image
            src={url}
            width={width}
            height={height}
            layout="responsive"
            priority={true}
            alt="playlist"
          />
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
