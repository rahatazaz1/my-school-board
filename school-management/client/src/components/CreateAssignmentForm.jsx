import React, { useState, useContext } from 'react';
import assignmentService from '../services/assignmentService';
import AuthContext from '../context/AuthContext';

const CreateAssignmentForm = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
  });

  const { title, description, dueDate } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await assignmentService.createAssignment(formData, user.token);
      // Optionally, refresh the list of assignments or show a success message
      console.log('Assignment created successfully');
    } catch (err) {
      console.error('Failed to create assignment', err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Create New Assignment</h3>
      <div>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Description"
          name="description"
          value={description}
          onChange={onChange}
          required
        ></textarea>
      </div>
      <div>
        <input
          type="date"
          name="dueDate"
          value={dueDate}
          onChange={onChange}
          required
        />
      </div>
      <input type="submit" value="Create Assignment" />
    </form>
  );
};

export default CreateAssignmentForm;
