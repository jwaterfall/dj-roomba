import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import theme from '../../theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
`;

export const Link = styled(NavLink)`
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  color: ${theme.text};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: capitalize;
  text-decoration: none;
  &.active {
    background-color: ${theme.accent};
  }
`;
