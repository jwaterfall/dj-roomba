import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-rows: 1fr;
  overflow-y: hidden;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 1.5rem;
`;

export const CardContainerRow = styled(CardContainer)`
  padding: 0;
  grid-auto-rows: 0;
  grid-auto-flow: column;
`;
