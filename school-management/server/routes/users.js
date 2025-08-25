const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Student = require('../models/Student');

// @route   GET api/users/students
// @desc    Get all students
// @access  Private (Teacher)
router.get('/students', auth, async (req, res) => {
    // Check if user is a teacher
    if (req.user.role !== 'teacher') {
        return res.status(403).json({ msg: 'User not authorized' });
    }

    try {
        const students = await Student.find().select('name');
        res.json(students);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
