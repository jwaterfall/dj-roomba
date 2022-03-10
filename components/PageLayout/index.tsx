import { FC } from 'react';

import ControlBar from '../ControlBar';
import Navbar from '../Navbar';
import { Container, Content } from './styles';

const PageLayout: FC = ({ children }) => (
  <Container>
    <Navbar />
    <Content>{children}</Content>
    <ControlBar />
  </Container>
);

export default PageLayout;
