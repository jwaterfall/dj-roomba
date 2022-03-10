import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

import { setDiscordAuthCode } from '../../redux/slices/authSlice';
import { useAppDispatch } from '../../redux/store';

const AuthDiscord: FC = () => {
  const router = useRouter();
  const discordAuthCode = router.query.code;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (discordAuthCode && typeof discordAuthCode === 'string') {
      dispatch(setDiscordAuthCode(discordAuthCode));
    }
  }, [dispatch, discordAuthCode]);

  return <></>;
};

export default AuthDiscord;
