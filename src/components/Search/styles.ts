import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
`;

export const SearchBar = styled.div`
  padding: 0 0.75rem;
  height: 2.5rem;
  max-width: 22.75rem;
  border-radius: 1.25rem;
  background: white;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 1rem;
  & > svg {
    fill: black;
    &:last-of-type {
      cursor: pointer;
    }
  }
`;

export const Input = styled.input`
  height: 1.75rem;
  flex: 1;
  color: black;
  font-size: 0.875rem;
  outline: none;
  border: none;
`;
