const express = require('express');
const helmet = require('helmet');

// Routes file
const usersRouter = require('./routers/users.js');

const server = express();


server.use(express.json());
server.use(helmet());


server.use('/api', usersRouter);

// Test
server.get('/', (req, res) => {
    res.send("<h1>I'm awake!!!!</h1>")
});


module.exports = server;