'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import useAuth from '../../../../components/AuthProvider';

type Provider = 'discord' | 'spotify';

interface PageProps {
  params: {
    provider: Provider;
  };
  searchParams: {
    code: string;
  };
}

function Page({ params, searchParams }: PageProps) {
  const { setDiscordAuthCode, setSpotifyAuthCode } = useAuth();
  const authCode = searchParams.code;

  useEffect(() => {
    if (!authCode || typeof authCode !== 'string') return;

    switch (params.provider) {
      case 'discord':
        setDiscordAuthCode(authCode);
        break;
      case 'spotify':
        setSpotifyAuthCode(authCode);
        break;
    }
  }, [authCode]);

  return <></>;
}

export default Page;
