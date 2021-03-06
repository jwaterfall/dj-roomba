import styled from 'styled-components';

import theme from '../../theme';

export const Container = styled.div`
  grid-area: control-bar;
  height: 6rem;
  background: ${theme.background};
  border-top: 1px solid ${theme.accent};
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'left center right';
  align-items: center;
`;

export const CurrentTrackSection = styled.div`
  grid-area: left;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
`;

export const Details = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const TitleLink = styled.a`
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

export const ControlsSection = styled.div`
  grid-area: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  & svg {
    cursor: pointer;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    color: ${theme.textSecondary};
    &:hover {
      color: ${theme.text};
    }
  }
`;

export const PlayButton = styled.div`
  background-color: ${theme.primary};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.05);
  }
  & > svg {
    cursor: pointer;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    color: ${theme.textSecondary};
    &:hover {
      color: ${theme.text};
    }
  }
`;

export const Repeat = styled.div<{ isOnRepeat: boolean }>`
  & svg {
    ${(props) => props.isOnRepeat && `color: ${theme.primary} !important;`}
  }
`;

export const JoinSection = styled.div`
  grid-area: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JoinButton = styled.button`
  background: ${theme.primary};
  border: 1px solid ${theme.accent};
  border-radius: 0.25rem;
  padding: 1rem 2.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${theme.text};
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const RightSection = styled.div`
  grid-area: right;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 1rem;
`;

export const QueueLink = styled.a`
  & > svg {
    cursor: pointer;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    color: ${theme.textSecondary};
    &:hover {
      color: ${theme.text};
    }
  }
  &.active {
    & > svg {
      color: ${theme.primary};
    }
  }
`;
