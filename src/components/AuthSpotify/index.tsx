import { FC, useEffect } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { useAppDispatch } from '../../redux/store';
import { setSpotifyAuthCode } from '../../redux/slices/authSlice';

const AuthSpotify: FC = () => {
  const spotifyAuthCode = queryString.parse(useLocation().search).code;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (spotifyAuthCode && typeof spotifyAuthCode === 'string') {
      dispatch(setSpotifyAuthCode(spotifyAuthCode));
    }
  }, []);

  return <></>;
};

export default AuthSpotify;
