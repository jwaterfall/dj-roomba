import styled from 'styled-components';

import theme from '../../theme';

export const Banner = styled.section`
  padding: 1.5rem 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: flex-end;
  background-color: ${theme.gradient};
  background-image: linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%);
`;

export const DiscographyBanner = styled(Banner)`
  padding: 0;
  margin-bottom: 1.5rem;
  background: none;
`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 14.5rem;
  height: 14.5rem;
  box-shadow: 0 0.25rem 3.5rem hsla(0, 0%, 0%, 0.5);
`;

export const DiscographyImageContainer = styled(ImageContainer)`
  width: 7.5rem;
  height: 7.5rem;
`;

export const Details = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Label = styled.h4`
  margin: 0;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 4.5rem;
  font-weight: 900;
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DiscographyTitle = styled(Title)`
  font-size: 2rem;
  font-weight: 700;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 400;
  color: hsla(0, 0%, 100%, 0.7);
  text-transform: capitalize;
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
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(0, 0%, 100%);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
