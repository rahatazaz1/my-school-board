import axios from 'axios';

const API_URL = '/api/teacher/';

const getDashboardData = (token) => {
  return axios.get(API_URL + 'dashboard', {
    headers: { 'x-auth-token': token },
  });
};

const teacherService = {
  getDashboardData,
};

export default teacherService;
