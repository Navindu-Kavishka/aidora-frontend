import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ProgressBar from '../../layouts/ProgressBar/ProgressBar';

const Form = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectInfo: '',
    estimatedValue: '',
  });

  const [projectStatus, setProjectStatus] = useState('Create');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('http://localhost:5000/api/createprojects', formData);
      if (response.status === 200) {
        alert('Project created successfully!');
        setProjectStatus(response.data.project.status);
      } else {
        alert('Failed to create project. Please try again.');
      }
    } catch (error) {
      console.error('Error creating project:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        alert('Error creating project: ' + error.response.data.message);
      } else {
        alert('Error creating project. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-fullscreen" style={fullscreenStyle}>
      <ProgressBar currentStep={projectStatus} />
      <form className="form-container" style={formStyle}>
        <div className="form-input-container" style={inputContainerStyle}>
          <input
            type="text"
            id="projectName"
            className="form-input"
            style={inputStyle}
            placeholder="Project name"
            value={formData.projectName}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        <div className="form-input-container" style={inputContainerStyle}>
          <textarea
            id="projectInfo"
            rows="4"
            className="form-textarea"
            style={{ ...inputStyle, ...textareaStyle }}
            placeholder="Project information"
            value={formData.projectInfo}
            onChange={handleChange}
            disabled={isSubmitting}
          ></textarea>
        </div>

        <div className="form-input-container" style={inputContainerStyle}>
          <input
            type="text"
            id="estimatedValue"
            className="form-input"
            style={inputStyle}
            placeholder="Estimated Value: Rs.0"
            value={formData.estimatedValue}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
          style={buttonStyle}
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
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
  width: '1000px'
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
  transition: 'border-color 0.2s',
};

const textareaStyle = {
  resize: 'none',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  background: '#037149',
  border: 'none',
  borderRadius: '4px',
  color: '#ffffff',
  cursor: 'pointer',
};
