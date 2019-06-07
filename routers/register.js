const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Register = require('../data/helpers/registerModel.js');

// Routes

router.post('/', (req, res) => {
    let credentials = req.body;
    const hash = bcrypt.hashSync(credentials.password, 12);
    credentials.password = hash;

    Register.add(credentials)
        .then(register => {
            res.status(200).json(register);
        })
        .catch(error => {
            res.status(500).json({ message: "We ran into an error retreving the specified request.", error });
        });
});

module.exports = router;
