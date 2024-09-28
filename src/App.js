import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const TAReviewForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    courseName: '',
    department: '',
    previousCourses: '',
    professorName: '',
    taEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>
      <label>
        Course Name:
        <input type="text" name="courseName" value={formData.courseName} onChange={handleChange} />
      </label>
      <label>
        Department:
        <input type="text" name="department" value={formData.department} onChange={handleChange} />
      </label>
      <label>
        Previous Courses:
        <input type="text" name="previousCourses" value={formData.previousCourses} onChange={handleChange} />
      </label>
      <label>
        Professor Name:
        <input type="text" name="professorName" value={formData.professorName} onChange={handleChange} />
      </label>
      <label>
        TA Email:
        <input type="email" name="taEmail" value={formData.taEmail} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TAReviewForm;