import React, { useState, useEffect, useContext } from 'react';
import teacherService from '../services/teacherService';
import assignmentService from '../services/assignmentService';
import CreateAssignmentForm from './CreateAssignmentForm';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  const { user } = useContext(AuthContext);
  const [teacherData, setTeacherData] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [teacherRes, assignmentsRes] = await Promise.all([
          teacherService.getDashboardData(user.token),
          assignmentService.getAssignments(user.token),
        ]);
        setTeacherData(teacherRes.data);
        setAssignments(assignmentsRes.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading dashboard.</div>;
  }

  return (
    <div>
      <h2>Welcome, {teacherData.name}</h2>
      <p>Email: {teacherData.email}</p>
      <p>Subject: {teacherData.subject}</p>

      <h3>Your Assignments</h3>
      <button onClick={() => setShowCreateForm(!showCreateForm)}>
        {showCreateForm ? 'Cancel' : 'Create New Assignment'}
      </button>
      {showCreateForm && <CreateAssignmentForm />}
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment._id}>
            <Link to={`/assignment/${assignment._id}`}>{assignment.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherDashboard;
