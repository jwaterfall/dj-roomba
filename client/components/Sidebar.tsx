import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import SpotifyWebApi from "spotify-web-api-node";
import { getLikedPlaylists } from "@/hooks/queries/useLikedPlaylists";
import { SignInButton, SignOutButton } from "./Button";

async function Sidebar() {
  const session = await getServerSession(authOptions);
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    accessToken: session?.accessToken,
  });

  const playlists = await getLikedPlaylists(spotifyApi);

  return (
    <div>
      {/* {session ? <SignOutButton /> : <SignInButton />} */}
      {playlists?.map((playlist) => (
        <div key={playlist.id}>{playlist.name}</div>
      ))}
    </div>
  );
}

export default Sidebar;
