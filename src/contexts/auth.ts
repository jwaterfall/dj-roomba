import {createContext, useContext} from 'react';

interface AuthContext {
  spotifyAccessToken?: string;
  setSpotifyAuthCode: (value: string) => void;
}

const authContext = createContext<AuthContext>({} as AuthContext);

export const useAuthContext = () => useContext(authContext);

export default authContext;
