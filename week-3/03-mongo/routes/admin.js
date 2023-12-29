const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db"); // Update the path based on your file structure

const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Invalid request. Username and password are required in the request body.' });
    }

    Admin.findOne({username})
        .then((admin) => {
            if (admin) {
                res.status(409).json({ message: 'Admin already exist'})
                return
            } else {
                // Create a new admin
                Admin.create({ username, password })
                .then(() => res.json({ message: 'Admin created successfully' }))
                .catch(err => {
                    console.error('Error in admin signup:', err);
                    res.status(500).json({ message: 'Internal Server Error' });
                });
            }
        })
        .catch(err => {
            console.error('Error in admin signup:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        });
});

router.post('/courses', adminMiddleware, (req, res) => {
    const { title, description, price, imageLink } = req.body;

    if (!title || !description || !price || !imageLink) {
        return res.status(400).json({ message: 'Invalid request. Title, description, price, and imageLink are required in the request body.' });
    }

    // Create a new course
    Course.create({ title, description, price, imageLink, adminId: req.admin._id })
        .then(course => res.json({ message: 'Course created successfully', courseId: course._id }))
        .catch(err => {
            console.error('Error in course creation:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        });
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Fetch all courses
    Course.find({adminId: req.admin._id})
        .then(courses => res.json({ courses }))
        .catch(err => {
            console.error('Error in fetching courses:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        });
});

module.exports = router;
