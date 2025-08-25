import React, { useState, useEffect, useContext } from 'react';
import attendanceService from '../services/attendanceService';
import AuthContext from '../context/AuthContext';

const AttendanceForm = () => {
  const { user } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await attendanceService.getStudents(user.token);
        setStudents(response.data);
        // Initialize attendance state
        const initialAttendance = {};
        response.data.forEach(student => {
          initialAttendance[student._id] = 'Present'; // Default to Present
        });
        setAttendance(initialAttendance);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [user]);

  const handleAttendanceChange = (studentId, status) => {
    setAttendance({ ...attendance, [studentId]: status });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const attendanceData = Object.keys(attendance).map(studentId => ({
        studentId,
        status: attendance[studentId],
        date,
      }));
      // This should be a loop of promises
      await Promise.all(attendanceData.map(data => attendanceService.markAttendance(data, user.token)));
      console.log('Attendance marked successfully');
    } catch (err) {
      console.error('Failed to mark attendance', err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading students.</div>;
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Take Attendance</h3>
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>
                <select
                  value={attendance[student._id] || 'Present'}
                  onChange={(e) => handleAttendanceChange(student._id, e.target.value)}
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <input type="submit" value="Submit Attendance" />
    </form>
  );
};

export default AttendanceForm;
