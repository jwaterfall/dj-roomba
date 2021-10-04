import styled from 'styled-components';
import theme from '../../../theme';

export const Container = styled.div`
  gap: 0.5rem;
  display: flex;
  margin-bottom: 1rem;
  & > svg {
    fill: ${theme.textSecondary};
    width: 2rem;
    height: 2rem;
    &:hover {
      fill: ${theme.text};
      cursor: pointer;
    }
  }
`;
