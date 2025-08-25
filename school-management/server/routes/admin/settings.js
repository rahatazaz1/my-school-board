const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Settings = require('../../models/Settings');

// Middleware to check for admin role
const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'User not authorized' });
    }
    next();
};

// @route   GET api/admin/settings
// @desc    Get app settings
// @access  Private (Admin)
router.get('/', [auth, isAdmin], async (req, res) => {
    try {
        const settings = await Settings.getSettings();
        res.json(settings);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/admin/settings
// @desc    Update app settings
// @access  Private (Admin)
router.put('/', [auth, isAdmin], async (req, res) => {
    try {
        const settings = await Settings.findOneAndUpdate({}, { $set: req.body }, { new: true, upsert: true });
        res.json(settings);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
