import * as express from 'express';
import * as cors from 'cors';
import { createServer } from 'http';
import { Server as SocketServer } from 'socket.io';

import { handleConnection } from './app/ws-handlers';

// Common configs
const port = process.env.port || 3001;

// Configuring express
const app = express();

app.use(cors({ origin: '*' }));


// Configuring HTTP server
const server = createServer(app);
server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);


// Configuring WebSocket server
const socketServer = new SocketServer(server, { cors: { origin: '*' } });

socketServer.on('connection', (socket) => handleConnection(socket, socketServer));
