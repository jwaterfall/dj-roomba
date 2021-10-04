import styled from 'styled-components';
import theme from '../../../theme';

export const IconList = styled.div`
  gap: 0.5rem;
  margin-left: -0.5rem;
  display: none;
  & > svg {
    fill: ${theme.textSecondary};
    width: 1.5rem;
    height: 1.5rem;
    &:hover {
      fill: ${theme.text};
      cursor: pointer;
    }
  }
`;

export const Index = styled.h4`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${theme.textSecondary};
`;
