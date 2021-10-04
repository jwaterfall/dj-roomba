import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import theme from '../../theme';

export const Card = styled(NavLink)`
  background: ${theme.card};
  border-radius: 0.25rem;
  padding: 1rem;
  transition: background 150ms;
  text-decoration: none;
  &:hover {
    background: ${theme.cardHover};
    cursor: pointer;
  }
`;

export const Image = styled.img`
  box-shadow: 0 0.25rem 3.5rem hsla(0, 0%, 0%, 0.5);
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: hsl(0, 0%, 100%);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Description = styled.p`
  margin: 0;
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: hsla(0, 0%, 100%, 0.7);
  text-transform: capitalize;
`;

export const DescriptionItem = styled.span`
  &:not(:first-child) {
    &:before {
      content: '•';
      margin: 0 0.25rem;
    }
  }
`;
