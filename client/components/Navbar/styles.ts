import styled from 'styled-components';

import theme from '../../theme';

export const NavbarContainer = styled.nav`
  grid-area: nav-bar;
  width: 16rem;
  max-height: 100%;
  display: flex;
  background: ${theme.background};
  border-right: 1px solid ${theme.accent};
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Links = styled.div`
  padding: 0.5rem;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${theme.textSecondary};
  transition: all 150ms;
  border-radius: 0.25rem;
  & > svg {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
  }
  &.active {
    color: ${theme.text};
    background-color: ${theme.active};
  }
  &:hover {
    color: ${theme.text};
  }
`;

export const Divider = styled.hr`
  background-color: ${theme.accent};
  border: none;
  height: 1px;
  margin: 0 1.5rem;
`;

export const Playlists = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0.5rem 0;
  transition: all 150ms;
  scrollbar-width: thin;
  scrollbar-color: hsla(0, 0%, 100%, 0.3) transparent;
  &:hover {
    scrollbar-color: hsla(0, 0%, 100%, 0.5) transparent;
  }
  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.2rem;
    background: hsla(0, 0%, 100%, 0.3);
    &:hover {
      background: hsla(0, 0%, 100%, 0.5);
    }
  }
`;

export const Playlist = styled.a`
  display: block;
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #b3b3b3;
  transition: color 150ms;
  &.active {
    color: hsl(0, 0%, 100%);
  }
  &:hover {
    color: hsl(0, 0%, 100%);
  }
`;
