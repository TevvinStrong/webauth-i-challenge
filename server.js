// Imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

// Routes file
const usersRouter = require('./routers/users.js');

const server = express();

// Session configuration.
const sessionConfig = {
    name: 'crown',
    secret: 'keep it secret, keep it safe!',
    cookie: {
        maxAge: 1000 * 30,
        secure: false, // true it production.
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));


server.use('/api', usersRouter);

// Test
server.get('/', (req, res) => {
    res.send("<h1>I'm awake!!!!</h1>")
});


module.exports = server;