// socket-handler.js
import { Server } from 'socket.io';

export default function injectSocketIO(server) {
	const io = new Server(server);

	// Socket.IO stuff goes here
	io.on('connection', (socket) => {
		// Generate a random username and send it to the client to display it
		let username = `User ${Math.round(Math.random() * 999999)}`;
		socket.emit('name', username);

		// Receive incoming messages and broadcast them
		socket.on('message', (message) => {
			io.emit('message', {
				from: username,
				message: message,
				time: new Date().toLocaleString()
			});
		});
	});

	console.log('SocketIO injected');
}
