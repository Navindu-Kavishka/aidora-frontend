import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ProgressBar from '../../layouts/ProgressBar/ProgressBar'; // Import ProgressBar component
import { Margin } from '@mui/icons-material';

const Form = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectInfo: '',
    estimatedValue: '',
  });

  const [projectStatus, setProjectStatus] = useState('Create');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/createprojects', formData);
      alert('Project created successfully!');
      setProjectStatus(response.data.project.status);
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Error creating project. Please try again.');
    }
  };

  return (
    <div className="form-fullscreen" style={fullscreenStyle}>
      <ProgressBar currentStep={projectStatus} /> {/* Pass the status to ProgressBar */}
      <form className="form-container" style={formStyle}>
        <div className="form-input-container" style={inputContainerStyle}>
          <input
            type="text"
            id="projectName"
            className="form-input"
            style={inputStyle}
            value={formData.projectName}
            onChange={handleChange}
          />
          <label
            htmlFor="projectName"
            className={`form-label ${formData.projectName && 'filled'}`}
            style={labelStyle}
          >
            Project name
          </label>
        </div>

        <div className="form-input-container" style={inputContainerStyle}>
          <textarea
            id="projectInfo"
            rows="4"
            className="form-textarea"
            style={{ ...inputStyle, ...textareaStyle }}
            value={formData.projectInfo}
            onChange={handleChange}
          ></textarea>
          <label
            htmlFor="projectInfo"
            className={`form-label ${formData.projectInfo && 'filled'}`}
            style={{ ...labelStyle, top: '1.5rem' }}
          >
            Project information
          </label>
        </div>

        <div className="form-input-container" style={inputContainerStyle}>
          <input
            type="text"
            id="estimatedValue"
            className="form-input"
            style={inputStyle}
            value={formData.estimatedValue}
            onChange={handleChange}
          />
          <label
            htmlFor="estimatedValue"
            className={`form-label ${formData.estimatedValue && 'filled'}`}
            style={labelStyle}
          >
            Estimated Value: Rs.0
          </label>
        </div>

        <button
          type="button"
          className="form-button"
          style={buttonStyle}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

const fullscreenStyle = {
  height: '70vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#f8f9fa',
  padding: '50px -50px',
  width:'1000px'
  
};

const formStyle = {
  background: '#ffffff',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  maxWidth: '900px',
  width: '1500px',
};

const inputContainerStyle = {
  marginBottom: '20px',
  position: 'relative',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ced4da',
  borderRadius: '4px',
};

const textareaStyle = {
  resize: 'none',
};

const labelStyle = {
  position: 'absolute',
  top: '10px',
  left: '10px',
  transition: '0.2s',
  pointerEvents: 'none',
  color: '#495057',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  background: '#007bff',
  border: 'none',
  borderRadius: '4px',
  color: '#ffffff',
  cursor: 'pointer',
  background: '#037149',
};
