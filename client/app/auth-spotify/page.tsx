"use client";

import { NextPage } from "next";
import { useSearchParams } from 'next/navigation';
import { useEffect } from "react";
import useAuth from "../../contexts/AuthContext";

const Page: NextPage = () => {
  const searchParams = useSearchParams();
  const spotifyAuthCode = searchParams.get('code');
  const { setSpotifyAuthCode } = useAuth();

  useEffect(() => {
    if (!spotifyAuthCode || typeof spotifyAuthCode !== "string") return;
    setSpotifyAuthCode(spotifyAuthCode);
  }, [spotifyAuthCode]);

  return <></>;
};

export default Page;
