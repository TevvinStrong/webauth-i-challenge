const jwt = require('jsonwebtoken');

const secrets = require('../config/secrets.js');

/*
module.exports = function restricted(req, res, next) {
    //const { username, password } = req.headers;

    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({ message: "You shall not pass!" });
    }
}
*/

module.exports = (req, res, next) => {
    const token = req.headers.Autorization;

    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if (err) {
            res.status(401).json({ message: "You shall not pass!" })
            console.log(token);
        } else {
            req.decodedToken = decodedToken;

            next();
        }
    });
};
