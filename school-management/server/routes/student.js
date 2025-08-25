const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Student = require('../models/Student');

// @route   GET api/student/dashboard
// @desc    Get student dashboard data
// @access  Private
router.get('/dashboard', auth, async (req, res) => {
  try {
    const student = await Student.findById(req.user.id).select('-password');
    res.json(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
