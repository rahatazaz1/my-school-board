import React, { useState, useEffect, useContext } from 'react';
import adminService from '../services/adminService';
import adminStudentService from '../services/adminStudentService';
import AuthContext from '../context/AuthContext';
import StudentForm from './StudentForm';
import SettingsForm from './SettingsForm';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const [adminData, setAdminData] = useState(null);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchAdminData = async () => {
    try {
      const response = await adminService.getDashboardData(user.token);
      setAdminData(response.data);
    } catch (err) {
      setError(err);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await adminStudentService.getStudents(user.token);
      setStudents(response.data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([fetchAdminData(), fetchStudents()]);
      setLoading(false);
    };
    loadData();
  }, [user]);

  const handleSaveStudent = () => {
    setShowStudentForm(false);
    setEditingStudent(null);
    fetchStudents(); // Refresh the list
  };

  const handleDeleteStudent = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await adminStudentService.deleteStudent(id, user.token);
        fetchStudents(); // Refresh the list
      } catch (err) {
        console.error('Failed to delete student', err);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading dashboard.</div>;
  }

  return (
    <div>
      <h2>Welcome, {adminData.name}</h2>
      <p>Email: {adminData.email}</p>

      <hr />
      <SettingsForm />
      <hr />

      <h3>Manage Students</h3>
      <button onClick={() => { setEditingStudent(null); setShowStudentForm(!showStudentForm); }}>
        {showStudentForm && !editingStudent ? 'Cancel' : 'Add New Student'}
      </button>
      {showStudentForm && <StudentForm student={editingStudent} onSave={handleSaveStudent} />}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.rollNumber}</td>
              <td>
                <button onClick={() => { setEditingStudent(student); setShowStudentForm(true); }}>Edit</button>
                <button onClick={() => handleDeleteStudent(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
