// Generate token
module.exports = function generateToken(user) {
    return jwt.sign({
        userId: user.id,
    }, 'guesse who I am'), (err, token) => {
        if (err) {
            res.status(401).json({ message: "Could not generate token." });
        } else {
            res.status(200).json({
                message: `Welcome ${user.username}!`,
                authToken: token,
            });
        }
    }
};
