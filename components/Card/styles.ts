import styled from 'styled-components';

import theme from '../../theme';

export const PlayButton = styled.div`
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  background-color: ${theme.primary};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(0.75rem);
  opacity: 0;
  transition: all 150ms;
  &:hover {
    transform: scale(1.05) !important;
    & > svg {
      color: ${theme.text};
    }
  }
  & > svg {
    cursor: pointer;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    color: ${theme.textSecondary};
  }
`;

export const Card = styled.a`
  background: ${theme.card};
  border-radius: 0.25rem;
  padding: 1rem;
  transition: background 150ms;
  text-decoration: none;
  &:hover {
    background: ${theme.cardHover};
    cursor: pointer;
    & ${PlayButton} {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: block;
  aspect-ratio: 1/1;
  box-shadow: 0 0.25rem 3.5rem hsla(0, 0%, 0%, 0.5);
  width: 100%;
`;

export const ImageContainerCircular = styled(ImageContainer)`
  border-radius: 50%;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: hsl(0, 0%, 100%);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Description = styled.p`
  margin: 0;
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${theme.textSecondary};
  text-transform: capitalize;
  max-height: 2rem;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
`;

export const DescriptionItem = styled.span`
  &:not(:first-child) {
    &:before {
      content: '•';
      margin: 0 0.25rem;
    }
  }
`;

export const DescriptionLink = styled.a`
  color: ${theme.textSecondary};
  white-space: nowrap;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
