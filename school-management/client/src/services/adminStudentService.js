import axios from 'axios';

const API_URL = '/api/admin/students/';

const getStudents = (token) => {
  return axios.get(API_URL, { headers: { 'x-auth-token': token } });
};

const createStudent = (studentData, token) => {
  return axios.post(API_URL, studentData, { headers: { 'x-auth-token': token } });
};

const updateStudent = (id, studentData, token) => {
  return axios.put(API_URL + id, studentData, { headers: { 'x-auth-token': token } });
};

const deleteStudent = (id, token) => {
  return axios.delete(API_URL + id, { headers: { 'x-auth-token': token } });
};

const adminStudentService = {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};

export default adminStudentService;
