const router = require('express').Router();

const Users = require('../data/helpers/usersModel.js');

// Routes

router.get('/', (req, res) => {
    Users.find().then(users => {
        res.status(200).json(users);
    })
        .catch(error => {
            res.status(500).json({ error: "We ran into an error retreving the specified request.", error });
        })
});

module.exports = router;
