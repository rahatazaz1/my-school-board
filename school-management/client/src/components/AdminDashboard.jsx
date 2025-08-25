import React, { useState, useEffect } from 'react';
import adminService from '../services/adminService';

const AdminDashboard = ({ user }) => {
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await adminService.getDashboardData(user.token);
        setAdminData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, [user]);

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
      <h3>User Management</h3>
      {/* User management features will go here */}
      <h3>Application Settings</h3>
      {/* Application settings features will go here */}
    </div>
  );
};

export default AdminDashboard;
