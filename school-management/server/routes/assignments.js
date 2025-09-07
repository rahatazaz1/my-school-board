const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Assignment = require('../models/Assignment');
const { check, validationResult } = require('express-validator');

// @route   POST api/assignments
// @desc    Create an assignment
// @access  Private (Teacher)
router.post('/', [auth, [
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('dueDate', 'Due date is required').not().isEmpty(),
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, description, dueDate } = req.body;

        const newAssignment = new Assignment({
            title,
            description,
            dueDate,
            teacher: req.user.id,
        });

        const assignment = await newAssignment.save();
        res.json(assignment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/assignments
// @desc    Get all assignments for a teacher
// @access  Private (Teacher)
router.get('/', auth, async (req, res) => {
    try {
        const assignments = await Assignment.find({ teacher: req.user.id }).sort({ dueDate: -1 });
        res.json(assignments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/assignments/:id
// @desc    Get assignment by ID
// @access  Private
router.get('/:id', auth, async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id).populate('submissions.student', ['name']);

        if (!assignment) {
            return res.status(404).json({ msg: 'Assignment not found' });
        }

        res.json(assignment);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Assignment not found' });
        }
        res.status(500).send('Server Error');
    }
});

// @route   POST api/assignments/:id/submit
// @desc    Submit an assignment
// @access  Private (Student)
router.post('/:id/submit', [auth, [
    check('content', 'Content is required').not().isEmpty(),
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const assignment = await Assignment.findById(req.params.id);

        const newSubmission = {
            student: req.user.id,
            content: req.body.content,
        };

        assignment.submissions.unshift(newSubmission);

        await assignment.save();

        res.json(assignment.submissions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/assignments/:id/grade
// @desc    Grade a submission
// @access  Private (Teacher)
router.post('/:id/grade', [auth, [
    check('submissionId', 'Submission ID is required').not().isEmpty(),
    check('grade', 'Grade is required').not().isEmpty(),
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const assignment = await Assignment.findById(req.params.id);

        const submission = assignment.submissions.find(sub => sub.id === req.body.submissionId);

        if (!submission) {
            return res.status(404).json({ msg: 'Submission not found' });
        }

        submission.grade = req.body.grade;

        await assignment.save();

        res.json(assignment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
