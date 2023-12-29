const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;

    if (!username || !password) {
        return res.status(401).json({ message: 'Authentication failed. Username and password are required in headers.' });
    }

    // Validate user from the User database
    User.findOne({ username, password }).populate('courses')
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Authentication failed. Invalid username or password.' });
            }
            // Attach the user object to the request for later use if needed
            req.user = user;
            next();
        })
        .catch(err => {
            console.error('Error in userMiddleware:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        });
}

module.exports = userMiddleware;