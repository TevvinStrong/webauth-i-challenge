const server = require('./server.js');

// Server listening
const PORT = process.env.port || 5000;

server.listen(PORT, () => {
    console.log(`*** Server is running on port ${PORT}`);
});
