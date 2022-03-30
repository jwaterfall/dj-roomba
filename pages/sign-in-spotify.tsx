import type { NextPage } from 'next';
import { useEffect } from 'react';

const AUTH_URL_SPOTIFY = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI}&response_type=code&scope=streaming%20user-read-email%20user-follow-read%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private%20playlist-read-collaborative%20user-top-read
`;

const SignInSpotifyPage: NextPage = () => {
  useEffect(() => {
    window.location.href = AUTH_URL_SPOTIFY;
  }, []);

  return <></>;
};

export default SignInSpotifyPage;
