const express = require('express');
const helmet = require('helmet');
//const bcrypt = require('bcryptjs');


// Routes file
const usersRouter = require('./routers/users.js');
const loginRouter = require('./routers/login');
const registerRouter = require('./routers/register');

const server = express();


server.use(express.json());
server.use(helmet());


server.use('/api/users', usersRouter);
server.use('/api/login', loginRouter);
server.use('/api/register', registerRouter);

// Test
server.get('/', (req, res) => {
    res.send("<h1>I'm awake!!!!</h1>")
});


module.exports = server;