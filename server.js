require('dotenv').config();
const port = process.env.port || 3000;
const server = require('http').createServer().listen(port);
const socketIO = require("socket.io");

const io = socketIO(server); // The default uws was bugged

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log("disconnected");
	})
});

console.log(`Server started on port ${port}`);
