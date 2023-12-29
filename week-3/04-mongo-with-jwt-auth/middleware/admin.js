const { Admin } = require("../db");
const jwt = require("jsonwebtoken");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Authentication failed. authorization is required in headers.' });
    }

    const token = authorization.split(" ")[1];

    try {
        // Validate admin from the Admin database
        const decoded = jwt.verify(token, process.env.JWT_PASSWORD);
        Admin.findOne({ password: decoded.username}).populate('courses')
        .then(admin => {
            if (!admin) {
                return res.status(401).json({ message: 'Authentication failed. Invalid authorization header.' });
            }
            // Attach the admin object to the request for later use if needed
            req.admin = admin;
            next();
        })
        .catch(err => {
            console.error('Error in adminMiddleware:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        });
    } catch (error) {
        return res.status(401).json({ message: 'Authentication failed. Invalid authorization header.' });
    }
}

module.exports = adminMiddleware;