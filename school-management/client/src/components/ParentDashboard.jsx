import React, { useState, useEffect } from 'react';
import parentService from '../services/parentService';

const ParentDashboard = ({ user }) => {
  const [parentData, setParentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParentData = async () => {
      try {
        const response = await parentService.getDashboardData(user.token);
        setParentData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchParentData();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading dashboard.</div>;
  }

  return (
    <div>
      <h2>Welcome, {parentData.name}</h2>
      <p>Email: {parentData.email}</p>
      <h3>Your Child's Information</h3>
      {parentData.student ? (
        <div>
          <p>Name: {parentData.student.name}</p>
          <p>Email: {parentData.student.email}</p>
          <p>Roll Number: {parentData.student.rollNumber}</p>
          <h4>Attendance</h4>
          <ul>
            {parentData.student.attendance.map((att) => (
              <li key={att._id}>
                {new Date(att.date).toLocaleDateString()}: {att.status}
              </li>
            ))}
          </ul>
          <h4>Assignments</h4>
          <ul>
            {parentData.student.assignments.map((ass) => (
              <li key={ass._id}>
                Assignment: {ass.assignment} - Grade: {ass.grade}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No student data found.</p>
      )}
    </div>
  );
};

export default ParentDashboard;
