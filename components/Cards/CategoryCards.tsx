import { FC } from 'react';

import useCategories from '../../hooks/queries/useCategories';
import Card from '../Card';
import { Container, Title, TopBar } from '../Section';
import { CardContainer } from './styles';

const CategoryCards: FC = () => {
  const { data: categories } = useCategories();

  if (!categories?.length) return <></>;

  return (
    <Container>
      <TopBar>
        <Title>Categories</Title>
      </TopBar>
      <CardContainer>
        {categories.map((category) => (
          <Card key={category.id} variant="category" category={category} />
        ))}
      </CardContainer>
    </Container>
  );
};

export default CategoryCards;
