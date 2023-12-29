const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;

    if (!username || !password) {
        return res.status(401).json({ message: 'Authentication failed. Username and password are required in headers.' });
    }

    // Validate admin from the Admin database
    Admin.findOne({ username, password }).populate('courses')
        .then(admin => {
            if (!admin) {
                return res.status(401).json({ message: 'Authentication failed. Invalid username or password.' });
            }
            // Attach the admin object to the request for later use if needed
            req.admin = admin;
            next();
        })
        .catch(err => {
            console.error('Error in adminMiddleware:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        });
}

module.exports = adminMiddleware;