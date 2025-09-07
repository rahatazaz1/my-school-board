import axios from 'axios';

const API_URL = '/api/student/';

const getDashboardData = (token) => {
  return axios.get(API_URL + 'dashboard', {
    headers: { 'x-auth-token': token },
  });
};

const studentService = {
  getDashboardData,
};

export default studentService;
