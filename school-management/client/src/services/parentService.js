import axios from 'axios';

const API_URL = '/api/parent/';

const getDashboardData = (token) => {
  return axios.get(API_URL + 'dashboard', {
    headers: { 'x-auth-token': token },
  });
};

const parentService = {
  getDashboardData,
};

export default parentService;
