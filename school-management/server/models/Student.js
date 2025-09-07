const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
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
  rollNumber: {
    type: String,
    required: true,
    unique: true,
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
  },
  attendance: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
        enum: ['Present', 'Absent'],
        default: 'Absent',
      },
    },
  ],
  assignments: [
    {
      assignment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment',
      },
      submission: {
        type: String,
      },
      grade: {
        type: String,
      },
    },
  ],
  tests: [
    {
      test: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Test',
      },
      marks: {
        type: Number,
      },
    },
  ],
});

module.exports = mongoose.model('Student', StudentSchema);
