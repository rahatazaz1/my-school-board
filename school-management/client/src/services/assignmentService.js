import axios from 'axios';

const API_URL = '/api/assignments/';

const createAssignment = (assignmentData, token) => {
  return axios.post(API_URL, assignmentData, {
    headers: { 'x-auth-token': token },
  });
};

const getAssignments = (token) => {
  return axios.get(API_URL, {
    headers: { 'x-auth-token': token },
  });
};

const getAssignment = (id, token) => {
  return axios.get(API_URL + id, {
    headers: { 'x-auth-token': token },
  });
};

const submitAssignment = (id, submissionData, token) => {
  return axios.post(API_URL + id + '/submit', submissionData, {
    headers: { 'x-auth-token': token },
  });
};

const gradeSubmission = (assignmentId, submissionId, grade, token) => {
  return axios.post(API_URL + assignmentId + '/grade', { submissionId, grade }, {
    headers: { 'x-auth-token': token },
  });
};

const assignmentService = {
  createAssignment,
  getAssignments,
  getAssignment,
  submitAssignment,
  gradeSubmission,
};

export default assignmentService;
