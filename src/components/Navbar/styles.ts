import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  grid-area: nav-bar;
  width: 16rem;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  background: hsl(0, 0%, 0%);
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Links = styled.div`
  padding: 0.5rem;
`;

export const Link = styled(NavLink)`
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
  color: #b3b3b3;
  transition: all 150ms;
  & > svg {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
  }
  & > .onlyActive {
    display: none;
  }
  &.active {
    color: hsl(0, 0%, 100%);
    & > svg {
      fill: hsl(0, 0%, 100%);
    }
    & > .onlyActive {
      display: block;
    }
    & > .onlyNotActive {
      display: none;
    }
  }
  &:hover {
    color: hsl(0, 0%, 100%);
  }
`;

export const LinkWithBackground = styled(Link)`
  &.active {
    background-color: #282828;
    border-radius: 0.25rem;
  }
`;

export const Divider = styled.hr`
  background-color: #282828;
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
  scrollbar-color: hsla(0, 0%, 100%, 0.3) hsl(0, 0%, 0%);
  &:hover {
    scrollbar-color: hsla(0, 0%, 100%, 0.5) hsl(0, 0%, 0%);
  }
  &::-webkit-scrollbar {
    background: hsl(0, 0%, 0%);
    width: 0.75rem;
  }
  &::-webkit-scrollbar-thumb {
    background: hsla(0, 0%, 100%, 0.3);
    &:hover {
      background: hsla(0, 0%, 100%, 0.5);
    }
  }
`;

export const Playlist = styled(NavLink)`
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
