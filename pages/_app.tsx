import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Socket } from 'socket.io-client';

import GlobalStyle from '../GlobalStyle';
import Auth from '../components/Auth';
import socketContext from '../contexts/socket';
import { persistor, store } from '../redux/store';

dayjs.extend(duration);

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  const [socket, setSocket] = useState<Socket>();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <socketContext.Provider value={{ socket, setSocket }}>
            <GlobalStyle />
            <Auth />
            <ReactQueryDevtools />
            <Component {...pageProps} />
          </socketContext.Provider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
