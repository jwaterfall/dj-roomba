import { FC, useState } from 'react';
import { MdClose, MdSearch } from 'react-icons/md';

import useSearchAlbums from '../../hooks/queries/useSearchAlbums';
import useSearchArtists from '../../hooks/queries/useSearchArtists';
import useSearchPlaylists from '../../hooks/queries/useSearchPlaylists';
import useSearchTracks from '../../hooks/queries/useSearchTracks';
import useSearchYoutube from '../../hooks/queries/useSearchYoutube';
import useCardCount from '../../hooks/useCardCount';
import useDebounce from '../../hooks/useDebounce';
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
          <MdSearch />
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <MdClose onClick={() => setInput('')} />
        </SearchBar>
      </TopBar>
      {tracks && tracks.length > 0 && <TrackList variant="search" tracks={tracks} query={query} />}
      {artists && artists.length > 0 && (
        <Cards variant="artistSearch" artists={artists} query={query} />
      )}
      {albums && albums.length > 0 && <Cards variant="albumSearch" albums={albums} query={query} />}
      {playlists && playlists.length > 0 && (
        <Cards variant="playlistSearch" playlists={playlists} query={query} />
      )}
      {youtubeVideos && youtubeVideos.length > 0 && (
        <TrackList variant="youtubeSearch" videos={youtubeVideos.slice(10)} query={query} />
      )}
      {!query && <Cards variant="categories" />}
    </>
  );
};

export default Search;
