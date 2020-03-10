const express = require('express');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use('/', (req, res) => {
    const { colorA, colorB } = req.body;
    io.emit('colors', [colorA, colorB]);
})

server.listen(3333);