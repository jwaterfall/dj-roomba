import {FC} from 'react';
import dayjs from 'dayjs';
import {Card, Image, Title, Description, DescriptionItem} from './styles';

import placeholder from '../../assets/images/placeholder.png';

interface Props {
  album: SpotifyApi.AlbumObjectSimplified;
}

const AlbumCard: FC<Props> = ({album}) => {
  const imageUrl: string | undefined = album.images[0]?.url;

  return (
    <Card to={`/album/${album.id}`}>
      <Image src={imageUrl || placeholder} />
      <Title>{album.name}</Title>
      <Description>
        <DescriptionItem>
          {dayjs(album.release_date).format('YYYY')}
        </DescriptionItem>
        <DescriptionItem>{album.album_type}</DescriptionItem>
      </Description>
    </Card>
  );
};

export default AlbumCard;
