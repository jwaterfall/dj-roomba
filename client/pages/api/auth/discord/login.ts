import axios, { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      try {
        const { authCode } = req.body;

        if (!authCode) {
          res.status(401).send('No authorization code provided!');
          return;
        }

        const result = await axios.post<
          URLSearchParams,
          AxiosResponse<{
            access_token: string;
            refresh_token: string;
            expires_in: string;
          }>
        >(
          'https://discord.com/api/oauth2/token',
          new URLSearchParams({
            client_id: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID as string,
            client_secret: process.env.DISCORD_CLIENT_SECRET as string,
            code: authCode,
            grant_type: 'authorization_code',
            redirect_uri: process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI as string,
            scope: 'identify',
          }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        );

        res.json({
          accessToken: result.data.access_token,
          refreshToken: result.data.refresh_token,
          expiresIn: result.data.expires_in,
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
