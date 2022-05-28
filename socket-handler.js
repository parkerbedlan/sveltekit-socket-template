// socket-handler.js
import { Server } from 'socket.io';

export default function injectSocketIO(server) {
	const io = new Server(server);
	io.attach(server); // probably redundant

	// Socket.IO stuff goes here
	io.on('connection', (socket) => {
		// Generate a random username and send it to the client to display it
		let username = `User ${Math.round(Math.random() * 999999)}`;
		console.log('connection made with user', username);
		socket.emit('name', username);
		console.log('emitted username', username);

		// Receive incoming messages and broadcast them
		socket.on('message', (message) => {
			console.log('received message', message);
			io.emit('message', {
				from: username,
				message: message,
				time: new Date().toLocaleString()
			});
			console.log('emitted message', message);
		});
	});

	console.log('SocketIO injected');
}
