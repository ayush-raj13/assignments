const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin-ayush:7rJUCv4ZjcanVTGY@cluster0.4d2gkcj.mongodb.net/CohortDB?retryWrites=true&w=majority');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
      }],
});

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
      }],
});

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageLink: { type: String, required: true },
    published: { type: Boolean, default: false }, // Set to true when course is published
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
      },
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
};
