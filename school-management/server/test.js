const axios = require('axios');
const { exec } = require('child_process');

const server = exec('node index.js');

server.stdout.on('data', (data) => {
  console.log(`server: ${data}`);
  if (data.includes('Server listening')) {
    runTest();
  }
});

server.stderr.on('data', (data) => {
  console.error(`server_error: ${data}`);
});

const runTest = async () => {
  const uniqueId = Date.now();
  const student = {
    name: 'Test Student',
    email: `test${uniqueId}@student.com`,
    password: 'password123',
    role: 'student',
    rollNumber: `12345${uniqueId}`,
  };

  try {
    // 1. Register a new student
    console.log('Attempting to register a new student...');
    const registerRes = await axios.post('http://localhost:3000/api/auth/register', student);
    console.log('Registration successful:', registerRes.data);

    // 2. Login as the student
    console.log('Attempting to log in...');
    const loginRes = await axios.post('http://localhost:3000/api/auth/login', {
      email: student.email,
      password: student.password,
      role: student.role,
    });
    const token = loginRes.data.token;
    console.log('Login successful, token:', token);

    // 3. Access the dashboard
    console.log('Attempting to access the dashboard...');
    const dashboardRes = await axios.get('http://localhost:3000/api/student/dashboard', {
      headers: { 'x-auth-token': token },
    });
    console.log('Dashboard data:', dashboardRes.data);

    // 4. Assertions
    if (dashboardRes.data.name !== student.name) {
      throw new Error(`Test failed: Name does not match. Expected ${student.name}, but got ${dashboardRes.data.name}`);
    }

    console.log('All tests passed!');
  } catch (error) {
    if (error.response) {
      console.error('Test failed with status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else {
      console.error('Test failed:', error.message);
    }
  } finally {
    server.kill();
  }
};
