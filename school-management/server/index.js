const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/student', require('./routes/student'));
app.use('/api/teacher', require('./routes/teacher'));
app.use('/api/parent', require('./routes/parent'));
app.use('/api/admin', require('./routes/admin'));

app.listen(port, () => {
  console.log('Server listening at http://localhost:' + port);
});
