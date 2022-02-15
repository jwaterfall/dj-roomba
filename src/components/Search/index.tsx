import { FC, useState } from 'react';

import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import useCardCount from '../../hooks/useCardCount';
import useDebounce from '../../hooks/useDebounce';
import useSearchAlbums from '../../hooks/queries/useSearchAlbums';
import useSearchArtists from '../../hooks/queries/useSearchArtists';
import useSearchPlaylists from '../../hooks/queries/useSearchPlaylists';
import useSearchTracks from '../../hooks/queries/useSearchTracks';
import useSearchYoutube from '../../hooks/queries/useSearchYoutube';
import Cards from '../Cards';
import TrackList from '../TrackList';
import { Input, SearchBar, TopBar } from './styles';

const Search: FC = () => {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  useDebounce(() => setQuery(input), 250, [input]);
  const cardCount = useCardCount();
  const { data: tracks } = useSearchTracks(query, 5);
  const { data: youtubeVideos } = useSearchYoutube(query);
  const { data: artists } = useSearchArtists(query, cardCount);
  const { data: albums } = useSearchAlbums(query, cardCount);
  const { data: playlists } = useSearchPlaylists(query, cardCount);

  return (
    <>
      <TopBar>
        <SearchBar>
          <SearchIcon />
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Close onClick={() => setQuery('')} />
        </SearchBar>
      </TopBar>
      {tracks && tracks.length > 0 && (
        <TrackList variant="search" tracks={tracks} query={query} />
      )}
      {youtubeVideos && youtubeVideos.length > 0 && (
        <TrackList
          variant="youtubeSearch"
          videos={youtubeVideos.slice(10)}
          query={query}
        />
      )}
      {artists && artists.length > 0 && (
        <Cards variant="artistSearch" artists={artists} query={query} />
      )}
      {albums && albums.length > 0 && (
        <Cards variant="albumSearch" albums={albums} query={query} />
      )}
      {playlists && playlists.length > 0 && (
        <Cards variant="playlistSearch" playlists={playlists} query={query} />
      )}
    </>
  );
};

export default Search;
