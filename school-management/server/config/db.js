const mongoose = require('mongoose');

const db = 'mongodb+srv://rahatazaz1:Md_azaz1201161@cluster0.w2njohs.mongodb.net/school-management?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(db, {});
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
