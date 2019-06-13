const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../data/helpers/usersModel.js');
const restricted = require('../auth/restricted-middleware.js');
const woken = require('../auth/webToken.js');

// Routes

router.post('/register', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    Users.add(user)
        .then(user => {
            const token = generateToken(user)
            res.status(201).json({ authToken: token });
        })
        .catch(error => {
            res.status(500).json({ message: "We ran into an error retreving the specified request." });
        });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user)
                res.status(200).json({ message: `Welcome ${user.username}!`, authToken: token });
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
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(500).json({ error: "We ran into an error retreving the specified request.", error });
        })
});

module.exports = router;
