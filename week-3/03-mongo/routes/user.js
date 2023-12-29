const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db"); // Update the path based on your file structure

// User Routes
router.post('/signup', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Invalid request. Username and password are required in the request body.' });
    }

    User.findOne({username})
        .then((user) => {
            if (user) {
                res.status(409).json({ message: 'User already exist'})
                return
            } else {
                // Create a new user
                User.create({ username, password })
                .then(() => res.json({ message: 'User created successfully' }))
                .catch(err => {
                    console.error('Error in user signup:', err);
                    res.status(500).json({ message: 'Internal Server Error' });
                });
            }
        })
        .catch(err => {
            console.error('Error in user signup:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        });
});

router.get('/courses', (req, res) => {
    // Fetch all courses
    Course.find()
        .then(courses => res.json({ courses }))
        .catch(err => {
            console.error('Error in fetching courses:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        });
});

router.put('/courses/:courseId', userMiddleware, (req, res) => {
    const courseId = req.params.courseId;

    // Implement course purchase logic
    Course.findById(courseId)
        .then(course => {
            if (!course) {
                return res.status(404).json({ message: 'Course not found' });
            }

            // Add the course to the user's purchasedCourses array
            req.user.courses.push(courseId);
            req.user.save();

            res.json({ message: 'Course purchased successfully' });
        })
        .catch(err => {
            console.error('Error in course purchase:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Fetch the user's purchased courses
    res.json({ purchasedCourses: req.user.courses });
});

module.exports = router;
