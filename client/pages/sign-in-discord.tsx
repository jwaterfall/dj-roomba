import type { NextPage } from 'next';
import { useEffect } from 'react';

const AUTH_URL_DISCORD = `https://discord.com/api/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI}&response_type=code&scope=identify`;

const SignInDiscordPage: NextPage = () => {
  useEffect(() => {
    window.location.href = AUTH_URL_DISCORD;
  }, []);

  return <></>;
};

export default SignInDiscordPage;
