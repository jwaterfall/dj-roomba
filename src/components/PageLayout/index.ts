import styled from 'styled-components';

export const PageLayout = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 1fr min-content;
  grid-template-areas: 'nav-bar content' 'playing-bar playing-bar';
`;

export const Content = styled.div`
  grid-area: content;
  background: #121212;
  overflow: hidden;
  overflow-y: auto;
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
