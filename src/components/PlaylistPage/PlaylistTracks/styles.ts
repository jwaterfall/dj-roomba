import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const Background = styled.section`
  background: #121212;
  position: relative;
`;

export const BackgroundGradient = styled.div`
  background-color: #c01078;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%);
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

export const Row = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 1rem;
  grid-template-columns: [index] 1rem [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(
      120px,
      1fr
    );
  & > :last-child {
    margin-left: auto;
  }
`;

export const RowHeader = styled(Row)`
  padding: 0 1rem;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
`;

export const Detail = styled.h4`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 400;
  color: hsla(0, 0%, 100%, 0.7);
  text-transform: capitalize;
`;

export const Header = styled(Detail)`
  text-transform: uppercase;
  line-height: 2.25rem;
`;

export const Track = styled(Row)`
  padding: 0.5rem 1rem;
  transition: background-color 150ms;
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.1);
    border-radius: 0.25rem;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TrackImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export const TitleSectionDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Title = styled(Detail)`
  font-size: 1rem;
  color: hsl(0, 0%, 100%);
`;
