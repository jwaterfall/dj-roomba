import { FC, useEffect } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { useAppDispatch } from '../../redux/store';
import { setDiscordAuthCode } from '../../redux/slices/authSlice';

const AuthDiscord: FC = () => {
  const discordAuthCode = queryString.parse(useLocation().search).code;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (discordAuthCode && typeof discordAuthCode === 'string') {
      dispatch(setDiscordAuthCode(discordAuthCode));
    }
  }, []);

  return <></>;
};

export default AuthDiscord;
