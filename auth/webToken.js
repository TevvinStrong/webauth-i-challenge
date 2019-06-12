const jwt = require('jsonwebtoken');

module.exports = function generateToken(user) {
    return jwt.sign({
        userId: user.id,
    }, 'guesse who I am', {
            expiresIn: '1h',
        })
};
