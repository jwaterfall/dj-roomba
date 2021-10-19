import {FC} from 'react';
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
  DescriptionLink,
} from './styles';

import placeholder from '../../assets/images/placeholder.png';
import {ReactComponent as Play} from '../../assets/icons/play.svg';

interface Props {
  album: SpotifyApi.AlbumObjectSimplified;
  artistPage?: boolean;
}

const AlbumCard: FC<Props> = ({album, artistPage = false}) => {
  const imageUrl: string | undefined = album.images[0]?.url;
  const {playAlbum} = usePlaybackControls();

  return (
    <Card to={`/album/${album.id}`}>
      <ImageContainer>
        <Image src={imageUrl || placeholder} />
        <PlayButton
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            playAlbum(album.id);
          }}>
          <Play />
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
              <DescriptionLink to={`/artist/${artist.id}`}>
                {artist.name}
              </DescriptionLink>
            </>
          ))}
        </Description>
      )}
    </Card>
  );
};

export default AlbumCard;
