import Client from "./Client";
import Logger, { LogLevel } from "./Logger";
import { GatewayIntentBits } from "discord.js";
import dotenv from "dotenv-flow";
import { Manager } from "erela.js";
import Spotify from "erela.js-spotify";
import express from "express";
import http from "http";
import { Server } from "socket.io";

dotenv.config();

const logger = new Logger(LogLevel.DEBUG);
const app = express();
const server = http.createServer(app);
const client = new Client(
  {
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates],
  },
  new Manager({
    nodes: [
      {
        host: process.env.LAVA_LINK_HOST as string,
        password: process.env.LAVA_LINK_PASSWORD as string,
        port: parseInt(process.env.LAVA_LINK_PORT as string),
      },
    ],
    plugins: [
      new Spotify({
        clientID: process.env.SPOTIFY_CLIENT_ID as string,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      }),
    ],
    send: (id, payload) => {
      const guild = client.guilds.cache.get(id);
      if (guild) guild.shard.send(payload);
    },
  }),
  new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST"],
    },
  }),
  logger
);

client.login(process.env.DISCORD_TOKEN);

server.listen(parseInt(process.env.PORT as string), () => {
  logger.info(`Socket server listening on port ${process.env.PORT}`);
});
