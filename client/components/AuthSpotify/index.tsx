import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../../redux/store';
import { setSpotifyAuthCode } from '../../redux/slices/authSlice';

const AuthSpotify: FC = () => {
  const router = useRouter();
  const spotifyAuthCode = router.query.code;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (spotifyAuthCode && typeof spotifyAuthCode === 'string') {
      dispatch(setSpotifyAuthCode(spotifyAuthCode));
    }
  }, [dispatch, spotifyAuthCode]);

  return <></>;
};

export default AuthSpotify;
