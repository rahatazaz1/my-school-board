import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import assignmentService from '../services/assignmentService';
import AuthContext from '../context/AuthContext';

const AssignmentDetailsPage = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [assignment, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [grade, setGrade] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const response = await assignmentService.getAssignment(id, user.token);
        setAssignment(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignment();
  }, [id, user]);

  const onGradeSubmit = async (submissionId) => {
    try {
      await assignmentService.gradeSubmission(id, submissionId, grade, user.token);
      const response = await assignmentService.getAssignment(id, user.token);
      setAssignment(response.data);
    } catch (err) {
      console.error('Failed to grade submission', err);
    }
  };

  const onSubmissionSubmit = async (e) => {
    e.preventDefault();
    try {
      await assignmentService.submitAssignment(id, { content }, user.token);
      const response = await assignmentService.getAssignment(id, user.token);
      setAssignment(response.data);
    } catch (err) {
      console.error('Failed to submit assignment', err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading assignment.</div>;
  }

  const hasSubmitted = assignment.submissions.some(sub => sub.student._id === user.id);

  return (
    <div>
      <h1>{assignment.title}</h1>
      <p>{assignment.description}</p>
      <p>Due Date: {new Date(assignment.dueDate).toLocaleDateString()}</p>

      {user.role === 'student' && !hasSubmitted && (
        <form onSubmit={onSubmissionSubmit}>
          <h3>Submit Your Assignment</h3>
          <textarea
            placeholder="Enter your submission"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      )}

      <h3>Submissions</h3>
      <ul>
        {assignment.submissions.map((sub) => (
          <li key={sub._id}>
            <p>Student: {sub.student.name}</p>
            <p>Content: {sub.content}</p>
            <p>Grade: {sub.grade || 'Not graded'}</p>
            {user.role === 'teacher' && !sub.grade && (
              <div>
                <input
                  type="text"
                  placeholder="Enter grade"
                  onChange={(e) => setGrade(e.target.value)}
                />
                <button onClick={() => onGradeSubmit(sub._id)}>Submit Grade</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignmentDetailsPage;
