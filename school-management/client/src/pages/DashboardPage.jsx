import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import StudentDashboard from '../components/StudentDashboard';
import TeacherDashboard from '../components/TeacherDashboard';
import ParentDashboard from '../components/ParentDashboard';
import AdminDashboard from '../components/AdminDashboard';

const DashboardPage = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Dashboard</h1>
      {user && <button onClick={logout}>Logout</button>}
      {user && user.role === 'student' && <StudentDashboard user={user} />}
      {user && user.role === 'teacher' && <TeacherDashboard user={user} />}
      {user && user.role === 'parent' && <ParentDashboard user={user} />}
      {user && user.role === 'admin' && <AdminDashboard user={user} />}
    </div>
  );
};

export default DashboardPage;
