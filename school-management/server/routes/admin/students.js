const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Student = require('../../models/Student');
const { check, validationResult } = require('express-validator');

// Middleware to check for admin role
const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'User not authorized' });
    }
    next();
};

// @route   POST api/admin/students
// @desc    Create a student
// @access  Private (Admin)
router.post('/', [auth, isAdmin, [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
    check('rollNumber', 'Roll number is required').not().isEmpty(),
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, email, password, rollNumber } = req.body;

        let student = await Student.findOne({ email });
        if (student) {
            return res.status(400).json({ msg: 'Student already exists' });
        }

        student = new Student({ name, email, password, rollNumber });

        const salt = await require('bcryptjs').genSalt(10);
        student.password = await require('bcryptjs').hash(password, salt);

        await student.save();
        res.json(student);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/admin/students
// @desc    Get all students
// @access  Private (Admin)
router.get('/', [auth, isAdmin], async (req, res) => {
    try {
        const students = await Student.find().select('-password');
        res.json(students);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/admin/students/:id
// @desc    Get student by ID
// @access  Private (Admin)
router.get('/:id', [auth, isAdmin], async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).select('-password');
        if (!student) {
            return res.status(404).json({ msg: 'Student not found' });
        }
        res.json(student);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/admin/students/:id
// @desc    Update a student
// @access  Private (Admin)
router.put('/:id', [auth, isAdmin], async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.json(student);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/admin/students/:id
// @desc    Delete a student
// @access  Private (Admin)
router.delete('/:id', [auth, isAdmin], async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Student removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
