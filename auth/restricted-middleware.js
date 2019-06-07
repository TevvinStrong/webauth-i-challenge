const bcrypt = require('bcryptjs');

const Users = require('../data/helpers/usersModel.js');


function restricted(req, res, next) {
    const { username, password } = req.headers;

    if (username && password) {
        Users.findBy({ username })
            .first()
            .then(user => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    //res.status(200).json({ message: `Welcome ${user.username}!` });
                    next();
                } else {
                    res.status(401).json({ message: "You shall not pass!" });
                }
            })
            .catch(error => {
                res.status(500).json({ message: "We ran into an error retreving the specified request.", error });
            });
    } else {
        res.status(400).json({ message: "Pleae provide credentials." });
    }
}

module.exports = restricted;
