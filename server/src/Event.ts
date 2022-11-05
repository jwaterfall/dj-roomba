import { Player } from 'erela.js';
import Client from './Client';

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
