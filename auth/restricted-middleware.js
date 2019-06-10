const bcrypt = require('bcryptjs');

const Users = require('../data/helpers/usersModel.js');


function restricted(req, res, next) {
    //const { username, password } = req.headers;

    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({ message: "You shall not pass!" });
    }
}

module.exports = restricted;
