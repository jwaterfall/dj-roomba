import styled from 'styled-components';

import theme from '../../../theme';

export const Container = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
`;

export const Details = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Title = styled.h4`
  height: 1.25rem;
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  color: ${theme.text};
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Artists = styled.div`
  height: 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${theme.textSecondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
`;

export const Artist = styled.a`
  text-decoration: none;
  color: ${theme.textSecondary};
  &:hover {
    text-decoration: underline;
  }
`;
