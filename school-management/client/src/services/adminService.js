import axios from 'axios';

const API_URL = '/api/admin/';

const getDashboardData = (token) => {
  return axios.get(API_URL + 'dashboard', {
    headers: { 'x-auth-token': token },
  });
};

const adminService = {
  getDashboardData,
};

export default adminService;
