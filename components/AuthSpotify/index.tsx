import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../redux/store';
import { setSpotifyAuthCode } from '../../redux/slices/authSlice';
import { useRouter } from 'next/router';

const AuthSpotify: FC = () => {
  const router = useRouter()
  const spotifyAuthCode = router.query.code
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (spotifyAuthCode && typeof spotifyAuthCode === 'string') {
      dispatch(setSpotifyAuthCode(spotifyAuthCode));
    }
  }, [dispatch, spotifyAuthCode]);

  return <></>;
};

export default AuthSpotify;
