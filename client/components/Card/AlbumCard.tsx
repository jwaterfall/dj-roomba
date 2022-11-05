import dayjs from 'dayjs';
import Image from 'next/image';
import { FC } from 'react';
import { MdPlayArrow } from 'react-icons/md';

import usePlaybackControls from '../../hooks/usePlaybackControls';
import NavLink from '../NavLink';
import {
  Card,
  Description,
  DescriptionItem,
  DescriptionLink,
  ImageContainer,
  PlayButton,
  Title,
} from './styles';

interface Props {
  album: SpotifyApi.AlbumObjectSimplified;
  artistPage?: boolean;
}

const AlbumCard: FC<Props> = ({ album, artistPage = false }) => {
  const { playAlbum } = usePlaybackControls();
  const url = album.images[0]?.url ?? '/images/placeholder.png';
  const width = album.images[0]?.width ?? 50;
  const height = album.images[0]?.height ?? 50;

  return (
    <NavLink href={`/albums/${album.id}`} passHref>
      <Card>
        <ImageContainer>
          <Image
            src={url}
            width={width}
            height={height}
            layout="responsive"
            priority
            alt="album"
          />
          <PlayButton
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              playAlbum(album.id);
            }}
          >
            <MdPlayArrow />
          </PlayButton>
        </ImageContainer>
        <Title>{album.name}</Title>
        {artistPage ? (
          <Description>
            <DescriptionItem>
              {dayjs(album.release_date).format('YYYY')}
            </DescriptionItem>
            <DescriptionItem>{album.album_type}</DescriptionItem>
          </Description>
        ) : (
          <Description>
            {album.artists.map((artist, index) => (
              <>
                {index !== 0 && ','}
                <NavLink href={`/artists/${artist.id}`} passHref>
                  <DescriptionLink>{artist.name}</DescriptionLink>
                </NavLink>
              </>
            ))}
          </Description>
        )}
      </Card>
    </NavLink>
  );
};

export default AlbumCard;
