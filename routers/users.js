const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../data/helpers/usersModel.js');
const restricted = require('../auth/restricted-middleware.js');
const secrets = require('../config/secrets.js');

// Routes
router.post('/register', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    Users.add(user)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(error => {
            res.status(500).json({ message: "We ran into an error retreving the specified request.", error });
        });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                //req.session.user = user;
                const token = generateToken(user);

                res.status(200).json({ message: `Welcome ${user.username}!`, token, });
            } else {
                res.status(401).json({ message: "You shall not pass!" });
            }
        })
        .catch(error => {
            res.status(500).json({ message: "We ran into an error retreving the specified request." });
        });
});


router.get('/users', restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.json({ users, decodedToken: req.decodedToken });
        })
        .catch(error => {
            res.status(500).json({ error: "We ran into an error retreving the specified request.", error });
        })
});

//Generate token.
function generateToken(user) {
    const payload = {
        userId: user.id,
        username: user.username,
        fullname: user.fullname,
    };

    const options = {
        expiresIn: '1h',
    };

    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;
