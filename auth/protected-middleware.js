const bcrypt = require('bcryptjs');

const Users = require('../data/helpers/usersModel.js');

function protected(req, res, next) {
    const { username, password } = req.headers;

    if (username && password) {
        Users.find({ username })
            .first()
            .then(user => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    next();
                } else {
                    res.status(401).json({ message: "Invalid credentials." });
                }
            })
            .catch(error => {
                res.status(500).json({ message: "We ran into an error retreving the specified request.", error });
            });
    } else {
        res.status(400).json({ message: "Pleae provide credentials." });
    }
}

module.exports = protected;
