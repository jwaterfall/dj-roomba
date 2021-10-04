import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../theme';

export const Background = styled.section`
  position: relative;
`;

export const BackgroundGradient = styled.div`
  background-color: ${theme.primary};
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.6) 0,
    ${theme.background} 100%
  );
  height: 14.5rem;
  width: 100%;
  position: absolute;
  z-index: 2;
`;

export const Content = styled.div`
  position: relative;
  padding: 1.5rem 2rem;
  z-index: 3;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 1rem;
`;

export const SimpleHeaderRow = styled.div<{isStuck: boolean}>`
  display: grid;
  align-items: center;
  grid-gap: 1rem;
  grid-template-columns: 3rem 4fr minmax(7.5rem, 1fr);
  padding: 0 1rem;
  border-bottom: 1px solid ${theme.accent};
  margin-bottom: 1rem;
  position: sticky;
  top: -1px;
  ${(props) =>
    props.isStuck &&
    `background: ${theme.background}; margin: 0 -2rem 1rem -2rem; padding: 0 3rem;`}
  & > :last-child {
    margin-left: auto;
  }
`;

export const PlaylistHeaderRow = styled(SimpleHeaderRow)`
  grid-template-columns: 3rem 6fr 4fr 3fr minmax(7.5rem, 1fr);
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
  &:hover {
    color: ${theme.text};
  }
`;
