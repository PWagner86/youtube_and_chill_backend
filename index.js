const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const PORT = process.env.PORT;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000' || PORT,
        methods: ['GET', 'POST'],
    },
});

app.get('/', (req, res) => res.send('Willkommen auf dem Server von Youtube and Chill'));

httpServer.listen(3001)

io.on('connection', socket => {
    console.log(socket.id, socket.connected);
    // socket.emit('hello', 'world');
    socket.on('click-event', arg => console.log(arg));
})
