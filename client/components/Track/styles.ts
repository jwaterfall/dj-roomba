import styled from 'styled-components';

import theme from '../../theme';
import { IconList, Index } from './ControlsSection/styles';

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

export const DetailLink = styled.a`
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

export const AlbumTrackContainer = styled.div<{ skeleton?: boolean }>`
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
  ${(props) => !props.skeleton
    && `&:hover {
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

export const PlaylistOrSavedTrackContainer = styled(AlbumTrackContainer)`
  grid-template-columns: 3rem 6fr 4fr 3fr minmax(7.5rem, 1fr);
`;

export const TopTrackContainer = styled(AlbumTrackContainer)`
  grid-template-columns: 3rem 6fr 4fr 3fr;
`;

export const ArtistTopTrackContainer = styled(AlbumTrackContainer)`
  grid-template-columns: 3rem 4fr 3fr minmax(7.5rem, 1fr);
`;

export const QueueTrackContainer = styled(AlbumTrackContainer)`
  grid-template-columns: 3rem 3fr 1fr;
`;

export const SearchTrackContainer = styled(AlbumTrackContainer)`
  grid-template-columns: 3rem 4fr minmax(7.5rem, 1fr);
`;
