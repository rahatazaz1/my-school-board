const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Student = require('../models/Student');
const { check, validationResult } = require('express-validator');

// @route   POST api/attendance/mark
// @desc    Mark student attendance
// @access  Private (Teacher)
router.post('/mark', [auth, [
    check('studentId', 'Student ID is required').not().isEmpty(),
    check('status', 'Status is required').isIn(['Present', 'Absent']),
    check('date', 'Date is required').isISO8601().toDate(),
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Check if user is a teacher
    if (req.user.role !== 'teacher') {
        return res.status(403).json({ msg: 'User not authorized' });
    }

    try {
        const { studentId, status, date } = req.body;

        const student = await Student.findById(studentId);

        if (!student) {
            return res.status(404).json({ msg: 'Student not found' });
        }

        const attendanceRecord = {
            date,
            status,
        };

        // Check if attendance for this date already exists
        const attendanceIndex = student.attendance.findIndex(
            (att) => new Date(att.date).toDateString() === new Date(date).toDateString()
        );

        if (attendanceIndex > -1) {
            // Update existing record
            student.attendance[attendanceIndex] = attendanceRecord;
        } else {
            // Add new record
            student.attendance.push(attendanceRecord);
        }

        await student.save();

        res.json(student.attendance);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
