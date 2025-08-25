const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Parent = require('../models/Parent');

// @route   GET api/parent/dashboard
// @desc    Get parent dashboard data
// @access  Private
router.get('/dashboard', auth, async (req, res) => {
  try {
    const parent = await Parent.findById(req.user.id)
      .select('-password')
      .populate('student');
    res.json(parent);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
