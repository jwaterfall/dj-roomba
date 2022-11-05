import { NextApiRequest, NextApiResponse } from 'next';
import SpotifyWebApi from 'spotify-web-api-node';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      try {
        const { authCode } = req.body;

        if (!authCode) {
          res.status(401).send('No authorization code provided!');
          return;
        }

        const spotifyApi = new SpotifyWebApi({
          redirectUri: process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI,
          clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
          clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        });

        const data = await spotifyApi.authorizationCodeGrant(authCode);

        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
};

export default handler;
