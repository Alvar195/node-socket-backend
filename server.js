const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const socketIO = require("socket.io");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get("*", (req, res) => {
	res.sendStatus(404);
});

const server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

const io = socketIO(server); // The default uws was bugged

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log("disconnected");
	})
});

