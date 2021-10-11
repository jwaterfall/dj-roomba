import {FC} from 'react';
import Skeleton from '../../Skeleton';

import {Container, Details} from './styles';

interface Props {
  hideImage?: boolean;
  hideArist?: boolean;
}

const TitleSectionSkeleton: FC<Props> = ({hideImage, hideArist}) => (
  <Container>
    {!hideImage && <Skeleton variant="rect" width="2.5rem" height="2.5rem" />}
    <Details>
      <Skeleton variant="rect" width="10rem" height="1.25rem" />
      {!hideArist && <Skeleton variant="rect" width="6rem" height="1rem" />}
    </Details>
  </Container>
);

export default TitleSectionSkeleton;
