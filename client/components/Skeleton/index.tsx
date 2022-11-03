import React from 'react';

import {
  SkeletonWrapper,
  StyledSkeleton,
  ShimmerWrapper,
  Shimmer,
} from './styles';

interface IProps {
  variant: 'title' | 'text' | 'rect';
  width?: string;
  height?: string;
}

const Skeleton: React.FC<IProps> = (props) => (
  <SkeletonWrapper {...props}>
    <StyledSkeleton>
      <ShimmerWrapper>
        <Shimmer />
      </ShimmerWrapper>
    </StyledSkeleton>
  </SkeletonWrapper>
);

export default Skeleton;
