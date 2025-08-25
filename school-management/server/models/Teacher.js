const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  attendance: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
        enum: ['Present', 'Absent', 'On-Leave'],
        default: 'Present',
      },
    },
  ],
  leaves: [
    {
      date: {
        type: Date,
        required: true,
      },
      reason: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending',
      },
    },
  ],
});

module.exports = mongoose.model('Teacher', TeacherSchema);
