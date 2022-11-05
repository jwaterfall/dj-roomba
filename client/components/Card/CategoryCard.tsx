import Image from 'next/image';
import { FC } from 'react';

import NavLink from '../NavLink';
import { Card, ImageContainer, Title } from './styles';

interface Props {
  category: SpotifyApi.CategoryObject;
}

const CategoryCard: FC<Props> = ({ category }) => {
  const url = category.icons[0]?.url ?? '/images/placeholder.png';
  const width = category.icons[0]?.width ?? 50;
  const height = category.icons[0]?.height ?? 50;

  return (
    <NavLink href={`/categories/${category.id}`} passHref>
      <Card>
        <ImageContainer>
          <Image
            src={url}
            width={width}
            height={height}
            layout="responsive"
            priority
            alt="category"
          />
        </ImageContainer>
        <Title>{category.name}</Title>
      </Card>
    </NavLink>
  );
};

export default CategoryCard;
