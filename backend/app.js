const express = require('express');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
    const { colorA, colorB } = req.body;
    io.emit('colors', {colorA, colorB});
    return res.status(200).send();
});

server.listen(3333);