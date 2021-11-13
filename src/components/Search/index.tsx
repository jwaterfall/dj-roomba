import { FC, useState } from 'react';

import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import useDebounce from '../../hooks/useDebounce';
import useSearchTracks from '../../queries/useSearchTracks';
import SearchTrackList from '../TrackList/SearchTrackList';
import { Container, Input, SearchBar } from './styles';

const Search: FC = () => {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  useDebounce(() => setSearch(input), 250, [input]);
  const { data: tracks } = useSearchTracks(search, 4);

  return (
    <Container>
      <SearchBar>
        <SearchIcon />
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Close onClick={() => setSearch('')} />
      </SearchBar>
      {tracks && tracks.length > 0 && <SearchTrackList tracks={tracks} />}
    </Container>
  );
};

export default Search;
