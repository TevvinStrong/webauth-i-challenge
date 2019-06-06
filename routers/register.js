const router = require('express').Router();

const Register = require('../data/helpers/registerModel.js');

// Routes

router.post('/', (req, res) => {
    Register.add(req.body)
        .then(register => {
            res.status(200).json(register);
        })
        .catch(error => {
            res.status(500).json({ message: "We ran into an error retreving the specified request.", error });
        });
});

module.exports = router;
