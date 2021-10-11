import {FC, useMemo} from 'react';
import useViewport from '../../hooks/useViewport';
import AlbumCard from '../Card/AlbumCard';

import {Container, TopBar, Title, CardContainer, Link} from './styles';

interface AlbumProps {
  variant: 'album';
  linkText: string;
  linkPath: string;
  albums: SpotifyApi.AlbumObjectSimplified[];
}

interface SingleProps {
  variant: 'single';
  linkText: string;
  linkPath: string;
  albums: SpotifyApi.AlbumObjectSimplified[];
}

type Props = AlbumProps | SingleProps;

const Cards: FC<Props> = (props) => {
  const {width} = useViewport();

  const cardCount = useMemo(() => {
    if (width < 1000) return 2;
    if (width < 1200) return 3;
    if (width < 1400) return 4;
    if (width < 1600) return 5;
    if (width < 1800) return 6;
    if (width < 2000) return 7;
    if (width < 2200) return 8;
    if (width < 2400) return 9;
    return 10;
  }, [width]);

  return (
    <Container>
      <TopBar>
        <Title>
          {props.variant === 'album' && 'Albums'}
          {props.variant === 'single' && 'Singles'}
        </Title>
        <Link to={props.linkPath}>{props.linkText}</Link>
      </TopBar>
      <CardContainer>
        {(props.variant === 'album' || props.variant === 'single') &&
          props.albums
            .slice(0, cardCount)
            .map((album) => <AlbumCard album={album} />)}
      </CardContainer>
    </Container>
  );
};

export default Cards;
