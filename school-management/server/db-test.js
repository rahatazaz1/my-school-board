const mongoose = require('mongoose');
const db = 'mongodb+srv://rahatazaz1:Md_azaz1201161@cluster0.w2njohs.mongodb.net/school-management?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB Atlas...');
    await mongoose.connect(db, {});
    console.log('MongoDB connected successfully!');
    await mongoose.disconnect();
    console.log('MongoDB disconnected.');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

connectDB();
