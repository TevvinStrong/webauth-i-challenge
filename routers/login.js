const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Login = require('../data/helpers/loginModel.js');

// Routes

router.post('/', (req, res) => {
    let credentials = req.body;

    const hash = bcrypt.hashSync(credentials.password, 14);

    credentials.password = hash;

    Login.add(credentials)
        .then(login => {
            res.status(200).json(login);
        })
        .catch(error => {
            res.status(500).json({ message: "We ran into an error retreving the specified request.", error });
        });
});


module.exports = router;
