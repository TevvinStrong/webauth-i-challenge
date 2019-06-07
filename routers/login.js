const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Login = require('../data/helpers/loginModel.js');
const Users = require('../data/helpers/usersModel.js');

// Routes

router.post('/', (req, res) => {
    let { username, password } = req.body;

    Users.findBy(username)
        .then(user => {
            //console.log(user);
            //console.log(password);
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ message: `Welcome ${user.username}!` });
            } else {
                res.status(401).json({ message: "Invalid credentials." });
            }
            console.log(user.password);
        })
        .catch(error => {
            res.status(500).json({ message: "We ran into an error retreving the specified request.", error });
        });
});

router.get('/', (req, res) => {
    Login.find()
        .then(login => {
            res.status(200).json(login);
        })
        .catch(error => {
            res.status(500).json({ message: "We ran into an error retreving the specified request.", error });
        })
});


router.delete('/:id', (req, res) => {
    Login.remove(req.params.id)
        .then(login => {
            res.status(200).json(login);
        })
        .catch(error => {
            res.status(500).json({ message: "We ran into an error deleting the specified request.", error });
        });
});

module.exports = router;
