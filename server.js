require('dotenv').config();
const server = require('http').createServer().listen(3000);
const socketIO = require("socket.io");

const io = socketIO(server); // The default uws was bugged

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log("disconnected");
	})
});
