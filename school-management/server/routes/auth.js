const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const Parent = require('../models/Parent');
const Admin = require('../models/Admin');

// @route   POST api/auth/register
// @desc    Register a user
// @access  Public
router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
    check('role', 'Role is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, role } = req.body;

    try {
      let user;
      // Check if user exists
      if (role === 'student') user = await Student.findOne({ email });
      if (role === 'teacher') user = await Teacher.findOne({ email });
      if (role === 'parent') user = await Parent.findOne({ email });
      if (role === 'admin') user = await Admin.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      // Create new user
      if (role === 'student') user = new Student({ name, email, password, rollNumber: req.body.rollNumber });
      if (role === 'teacher') user = new Teacher({ name, email, password, subject: req.body.subject });
      if (role === 'parent') user = new Parent({ name, email, password, student: req.body.studentId });
      if (role === 'admin') user = new Admin({ name, email, password });

      // Hash password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
          role: role,
        },
      };

      jwt.sign(
        payload,
        'mysecrettoken',
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    check('role', 'Role is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, role } = req.body;

    try {
      let user;
      // Check for user
      if (role === 'student') user = await Student.findOne({ email });
      if (role === 'teacher') user = await Teacher.findOne({ email });
      if (role === 'parent') user = await Parent.findOne({ email });
      if (role === 'admin') user = await Admin.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
          role: role,
        },
      };

      jwt.sign(
        payload,
        'mysecrettoken',
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
