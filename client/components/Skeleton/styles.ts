import styled from 'styled-components';

import theme from '../../theme';

interface IProps {
  variant: 'title' | 'text' | 'rect';
  width?: string;
  height?: string;
}

export const SkeletonWrapper = styled.div<IProps>`
  ${(props) => props.variant === 'title'
    && `width: ${props.width || '25%'};
    height: ${props.height || '1.375rem'};
  `}
  ${(props) => props.variant === 'text'
    && `width: ${props.width || '100%'};
    height: ${props.height || '1rem'}
  ;`}
  ${(props) => props.variant === 'rect'
    && `width: ${props.width || '100%'};
    height: ${props.height || '100%'};
  `}
`;

export const StyledSkeleton = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${theme.skeletonBackground};
  border-radius: 0.25rem;
  overflow: hidden;
`;

export const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @keyframes loading {
    0% {
      transform: translateX(-150%);
    }
    50% {
      transform: translateX(-60%);
    }
    100% {
      transform: translateX(150%);
    }
  }

  animation: loading 2.5s infinite;
`;

export const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  background: ${theme.skeletonShimmer};
  transform: skewX(-20deg);
  box-shadow: 0 0 2rem 2rem hlsa(0, 0%, 100%, 0.05);
`;
