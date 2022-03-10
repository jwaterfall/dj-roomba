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
  DescriptionLink,
  Image,
  ImageContainer,
  PlayButton,
  Title,
} from './styles';

interface Props {
  album: SpotifyApi.AlbumObjectSimplified;
  artistPage?: boolean;
}

const AlbumCard: FC<Props> = ({ album, artistPage = false }) => {
  const imageUrl: string | undefined = album.images[0]?.url;
  const { playAlbum } = usePlaybackControls();

  return (
    <NavLink href={`/albums/${album.id}`} passHref>
      <Card>
        <ImageContainer>
          <Image src={imageUrl || placeholder} />
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
