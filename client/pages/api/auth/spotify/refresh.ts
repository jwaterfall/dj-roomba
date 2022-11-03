import { NextApiRequest, NextApiResponse } from 'next';
import SpotifyWebApi from 'spotify-web-api-node';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      try {
        const refreshToken: string | undefined = req.body.refreshToken;

        if (!refreshToken) {
          res.status(401).send('No refresh token provided!');
          return;
        }

        const spotifyApi = new SpotifyWebApi({
          redirectUri: process.env.SPOTIFY_REDIRECT_URI,
          clientId: process.env.SPOTIFY_CLIENT_ID,
          clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
          refreshToken,
        });

        const data = await spotifyApi.refreshAccessToken();

        res.json({
          accessToken: data.body.access_token,
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
