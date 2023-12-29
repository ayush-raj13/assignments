const { User } = require("../db");
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Authentication failed. authorization is required in headers.' });
    }

    const token = authorization.split(" ")[1];

    try {
        // Validate user from the User database
        const decoded = jwt.verify(token, process.env.JWT_PASSWORD);
        User.findOne({ username: decoded.username }).populate('courses')
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Authentication failed. Invalid authorization header.' });
            }
            // Attach the user object to the request for later use if needed
            req.user = user;
            next();
        })
        .catch(err => {
            console.error('Error in userMiddleware:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        });
    } catch (error) {
        return res.status(401).json({ message: 'Authentication failed. Invalid authorization header.' });
    }
}

module.exports = userMiddleware;