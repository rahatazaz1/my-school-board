import React, { useState, useEffect, useContext } from "react";
import studentService from "../services/studentService";
import assignmentService from "../services/assignmentService";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const { user } = useContext(AuthContext);
  const [studentData, setStudentData] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [studentRes, assignmentsRes] = await Promise.all([
          studentService.getDashboardData(user.token),
          assignmentService.getAssignments(user.token),
        ]);
        setStudentData(studentRes.data);
        setAssignments(assignmentsRes.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const getAttendanceSummary = () => {
    if (!studentData || !studentData.attendance || studentData.attendance.length === 0) {
      return "No attendance records.";
    }

    const totalDays = studentData.attendance.length;
    const presentDays = studentData.attendance.filter(att => att.status === "Present").length;
    const percentage = (presentDays / totalDays) * 100;

    return `${presentDays} / ${totalDays} days present (${percentage.toFixed(2)}%)`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading dashboard.</div>;
  }

  return (
    <div>
      <h2>Welcome, {studentData.name}</h2>
      <p>Email: {studentData.email}</p>
      <p>Roll Number: {studentData.rollNumber}</p>

      <h3>Your Assignments</h3>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment._id}>
            <Link to={`/assignment/${assignment._id}`}>{assignment.title}</Link>
          </li>
        ))}
      </ul>

      <h3>Your Attendance</h3>
      <p>{getAttendanceSummary()}</p>
      <ul>
        {studentData.attendance.map((att) => (
          <li key={att._id} style={{ color: att.status === "Present" ? "green" : "red" }}>
            {new Date(att.date).toLocaleDateString()}: {att.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
