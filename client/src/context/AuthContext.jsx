import React, { createContext, useState, useEffect } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = async (userData) => {
    const response = await authService.login(userData);
    if (response.data.token) {
      const user = { ...userData, token: response.data.token };
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
    }
    return response;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const register = async (userData) => {
    const response = await authService.register(userData);
    if (response.data.token) {
      const user = { ...userData, token: response.data.token };
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
    }
    return response;
  };

  return React.createElement(
    AuthContext.Provider,
    { value: { user, login, logout, register } },
    children
  );
};

export default AuthContext;
