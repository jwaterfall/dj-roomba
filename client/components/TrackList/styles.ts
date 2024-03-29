import styled from 'styled-components';

import theme from '../../theme';

export const Background = styled.section`
  position: relative;
  &:not(:last-child) {
    border-bottom: 1px solid ${theme.accent};
  }
`;

export const BackgroundGradient = styled.div`
  background-color: ${theme.gradient};
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.6) 0,
    ${theme.background} 100%
  );
  height: 100%;
  max-height: 14.5rem;
  width: 100%;
  position: absolute;
  z-index: 2;
`;

export const Content = styled.div`
  position: relative;
  padding: 1.5rem 2rem;
  z-index: 3;
`;

export const SimpleHeaderRow = styled.div<{ isStuck: boolean }>`
  display: grid;
  align-items: center;
  grid-gap: 1rem;
  grid-template-columns: 3rem 4fr minmax(7.5rem, 1fr);
  padding: 0 1rem;
  border-bottom: 1px solid ${theme.accent};
  margin-bottom: 1rem;
  position: sticky;
  z-index: 2;
  top: -1px;
  & > :last-child {
    margin-left: auto;
  }
  ${(props) => props.isStuck
    && `background: ${theme.background}; margin: 0 -2rem 1rem -2rem; padding: 0 3rem;`}
`;

export const PlaylistHeaderRow = styled(SimpleHeaderRow)`
  grid-template-columns: 3rem 6fr 4fr 3fr minmax(7.5rem, 1fr);
`;

export const QueueHeaderRow = styled(SimpleHeaderRow)`
  grid-template-columns: 3rem 3fr 1fr;
`;

export const Header = styled.h4`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${theme.textSecondary};
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  line-height: 2.25rem;
`;

export const Copyrights = styled.div`
  margin-top: 2rem;
`;

export const Copyright = styled.p`
  font-size: 0.7rem;
  color: ${theme.textSecondary};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SeeMore = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${theme.textSecondary};
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: ${theme.text};
  }
`;
