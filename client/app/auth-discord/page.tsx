"use client";

import { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import useAuth from "../../contexts/AuthContext";

const Page: NextPage = () => {
  const searchParams = useSearchParams();
  const discordAuthCode = searchParams.get("code");
  const { setDiscordAuthCode } = useAuth();

  useEffect(() => {
    if (!discordAuthCode || typeof discordAuthCode !== "string") return;
    setDiscordAuthCode(discordAuthCode);
  }, [discordAuthCode]);

  return <></>;
};

export default Page;
