import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../theme';
import {IconList, Index} from '../Track/ControlsSection/styles';

export const Detail = styled.h4`
  height: 1rem;
  margin: 0;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${theme.textSecondary};
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DetailLink = styled(NavLink)`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${theme.textSecondary};
  text-transform: capitalize;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    text-decoration: underline;
  }
`;

export const SimpleTrack = styled.div<{skeleton?: boolean}>`
  display: grid;
  align-items: center;
  grid-gap: 1rem;
  grid-template-columns: 3rem 4fr minmax(7.5rem, 1fr);
  padding: 0.5rem 1rem;
  transition: background-color 150ms;
  border-radius: 0.25rem;
  & > :last-child {
    margin-left: auto;
  }
  ${(props) =>
    !props.skeleton &&
    `&:hover {
    background-color: ${theme.accent};
    & ${Detail}, ${DetailLink} {
      color: ${theme.text};
    }
    & ${Index} {
      display: none;
    }
    & ${IconList} {
      display: flex;
    }
  }`}
`;

export const PlaylistTrack = styled(SimpleTrack)`
  grid-template-columns: 3rem 6fr 4fr 3fr minmax(7.5rem, 1fr);
`;

export const ArtistTopTrack = styled(SimpleTrack)`
  grid-template-columns: 3rem 4fr 3fr minmax(7.5rem, 1fr);
`;

export const QueueTrack = styled(SimpleTrack)`
  grid-template-columns: 3rem 3fr 1fr;
`;
