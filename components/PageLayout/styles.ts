import styled from 'styled-components';

import theme from '../../theme';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 1fr min-content;
  grid-template-areas: 'nav-bar content' 'control-bar control-bar';
`;

export const Content = styled.div`
  grid-area: content;
  background: ${theme.background};
  overflow: hidden;
  overflow-y: auto;
  transition: all 150ms;
  scrollbar-width: thin;
  scrollbar-color: hsla(0, 0%, 100%, 0.3) ${theme.navbar};
  &:hover {
    scrollbar-color: hsla(0, 0%, 100%, 0.5) ${theme.navbar};
  }
  &::-webkit-scrollbar {
    background: ${theme.navbar};
    width: 0.75rem;
  }
  &::-webkit-scrollbar-thumb {
    background: hsla(0, 0%, 100%, 0.3);
    &:hover {
      background: hsla(0, 0%, 100%, 0.5);
    }
  }
`;
