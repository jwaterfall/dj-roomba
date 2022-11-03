import Client from "./Client";
import { Player } from "erela.js";

export interface Event {
  name: string;
  once: boolean;
  execute: (client: Client, ...args: any[]) => Promise<void>;
}

export interface Requester {
  id: string;
  username: string;
  avatar: string;
}

export interface SocketEvent extends Event {
  execute: (client: Client, player: Player, requester: Requester, ...args: any[]) => Promise<void>;
}
