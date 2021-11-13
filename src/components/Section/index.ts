import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: hsl(0, 0%, 100%);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Link = styled(NavLink)`
  font-size: 0.875rem;
  font-weight: 600;
  color: hsla(0, 0%, 100%, 0.7);
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: hsl(0, 0%, 100%);
    text-decoration: underline;
  }
`;
