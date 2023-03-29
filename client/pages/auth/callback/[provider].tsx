import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { setDiscordAuthCode, setSpotifyAuthCode } from '../../../redux/slices/authSlice';
import { useAppDispatch } from '../../../redux/store';

const AuthCallbackPage: NextPage = () => {
  const router = useRouter();
  const authCode = router.query.code;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!authCode || typeof authCode !== 'string') return;

    switch (router.query.provider) {
      case 'discord':
        dispatch(setDiscordAuthCode(authCode));
        break;
      case 'spotify':
        dispatch(setSpotifyAuthCode(authCode));
        break;
    }
  }, [dispatch, authCode]);

  return <></>;
};

export default AuthCallbackPage;
