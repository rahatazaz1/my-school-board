const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Admin = require('../models/Admin');

// @route   GET api/admin/dashboard
// @desc    Get admin dashboard data
// @access  Private
router.get('/dashboard', auth, async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id).select('-password');
    res.json(admin);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
