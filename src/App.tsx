import {useEffect, useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {BrowserRouter as Router} from 'react-router-dom';
import socketIOClient, {Socket} from 'socket.io-client';
import authContext from './contexts/auth';
import playbackContext, {Track} from './contexts/playback';
import useAuth from './hooks/useAuth';
import Routes from './navigation/Routes';
import GlobalStyle from './GlobalStyle';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import dotenv from 'dotenv';

dotenv.config();

dayjs.extend(duration);

const queryClient = new QueryClient();

const App = () => {
  const {spotifyAccessToken, setSpotifyAuthCode} = useAuth();
  const [socket, setSocket] = useState<Socket>();
  const [currentTrack, setCurrentTrack] = useState<Track>();
  const [queuedTracks, setQueuedTracks] = useState<Track[]>([]);

  useEffect(() => {
    const newSocket = socketIOClient(
      process.env.REACT_APP_SOCKET_REACT_APP_SERVER as string,
      {
        query: {guildId: '210120672087769089'},
      },
    );

    newSocket.on('currentTrack', (track?: Track) => {
      setCurrentTrack(track);
    });

    newSocket.on('queuedTracks', (tracks: Track[]) => {
      setQueuedTracks(tracks);
    });

    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, [setSocket]);

  return (
    <QueryClientProvider client={queryClient}>
      <authContext.Provider value={{spotifyAccessToken, setSpotifyAuthCode}}>
        <playbackContext.Provider value={{currentTrack, queuedTracks, socket}}>
          <GlobalStyle />
          <ReactQueryDevtools />
          <Routes />
        </playbackContext.Provider>
      </authContext.Provider>
    </QueryClientProvider>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
