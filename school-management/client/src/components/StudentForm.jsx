import React, { useState, useEffect, useContext } from 'react';
import adminStudentService from '../services/adminStudentService';
import AuthContext from '../context/AuthContext';

const StudentForm = ({ student, onSave }) => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rollNumber: '',
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  const { name, email, password, rollNumber } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (student) {
        await adminStudentService.updateStudent(student._id, formData, user.token);
      } else {
        await adminStudentService.createStudent(formData, user.token);
      }
      onSave(); // Callback to refresh the student list
    } catch (err) {
      console.error('Failed to save student', err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>{student ? 'Edit Student' : 'Create Student'}</h3>
      <div>
        <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} required />
      </div>
      <div>
        <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} />
      </div>
      <div>
        <input type="text" placeholder="Roll Number" name="rollNumber" value={rollNumber} onChange={onChange} required />
      </div>
      <input type="submit" value={student ? 'Update Student' : 'Create Student'} />
    </form>
  );
};

export default StudentForm;
