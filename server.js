const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());


// Test
server.get('/', (req, res) => {
    res.send("<h1>I'm awake!!!!</h1>")
});

module.exports = server;