import {FC, useEffect} from 'react';
import {useLocation} from 'react-router';
import queryString from 'query-string';
import {useAuthContext} from '../../contexts/auth';

const AuthSpotify: FC = () => {
  const spotifyAuthCode = queryString.parse(useLocation().search).code;
  const {setSpotifyAuthCode} = useAuthContext();

  useEffect(() => {
    if (spotifyAuthCode && typeof spotifyAuthCode === 'string') {
      setSpotifyAuthCode(spotifyAuthCode);
    }
  }, []);

  return <></>;
};

export default AuthSpotify;
