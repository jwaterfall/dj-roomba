import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import theme from '../../theme';

export const Container = styled.div`
  grid-area: control-bar;
  height: 5rem;
  background: ${theme.background};
  border-top: 1px solid ${theme.accent};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CurrentTrackSection = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export const Details = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const TitleLink = styled(NavLink)`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 400;
  color: ${theme.text};
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Description = styled.div`
  font-size: 0.7rem;
  font-weight: 400;
  color: ${theme.textSecondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
`;

export const Artist = styled(NavLink)`
  text-decoration: none;
  color: ${theme.textSecondary};
  &:hover {
    text-decoration: underline;
  }
`;
