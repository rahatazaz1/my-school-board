import axios from 'axios';

const API_URL = '/api/attendance/';
const USERS_API_URL = '/api/users/';

const getStudents = (token) => {
  return axios.get(USERS_API_URL + 'students', {
    headers: { 'x-auth-token': token },
  });
};

const markAttendance = (attendanceData, token) => {
  return axios.post(API_URL + 'mark', attendanceData, {
    headers: { 'x-auth-token': token },
  });
};

const attendanceService = {
  getStudents,
  markAttendance,
};

export default attendanceService;
