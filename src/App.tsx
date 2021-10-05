import {useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {Socket} from 'socket.io-client';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import dotenv from 'dotenv';

import Routes from './navigation/Routes';
import GlobalStyle from './GlobalStyle';
import Auth from './components/Auth';
import {PersistGate} from 'redux-persist/integration/react';
import socketContext from './contexts/socket';

dotenv.config();

dayjs.extend(duration);

const queryClient = new QueryClient();

const App = () => {
  const [socket, setSocket] = useState<Socket>();

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <socketContext.Provider value={{socket, setSocket}}>
              <GlobalStyle />
              <ReactQueryDevtools />
              <Auth />
              <Routes />
            </socketContext.Provider>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
