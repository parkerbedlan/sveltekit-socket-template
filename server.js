// server.js
import http from 'http';
import { handler } from './build/handler.js'; // <- Import SvelteKit handlers
import injectSocketIO from './socket-handler.js'; // The SocketIO stuff (see next step)
import express from 'express';

const app = express();
const server = http.createServer(app);

// Inject SocketIO
injectSocketIO(server);

app.set('proxy', 1);

// SvelteKit handlers
app.use(handler);

const { PORT = '3000' } = process.env;
server.listen(PORT, () => {
	console.log(`Running on http://localhost:${PORT}`);
});
