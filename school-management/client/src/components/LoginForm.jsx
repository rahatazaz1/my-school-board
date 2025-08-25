import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student',
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const { email, password, role } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password, role });
      navigate('/dashboard'); // Redirect to dashboard after login
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          minLength="6"
        />
      </div>
      <div>
        <select name="role" value={role} onChange={onChange}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="parent">Parent</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <input type="submit" value="Login" />
    </form>
  );
};

export default LoginForm;
