import styled from 'styled-components';

import theme from '../../../theme';

export const Container = styled.div`
  gap: 0.5rem;
  display: flex;
  margin-bottom: 1rem;
  & > svg {
    color: ${theme.textSecondary};
    width: 2rem;
    height: 2rem;
    &:hover {
      color: ${theme.text};
      cursor: pointer;
    }
  }
`;
