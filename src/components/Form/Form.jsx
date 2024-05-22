import React from 'react';

const Form = () => {
  return (
    <div style={fullscreenStyle}>
      <form style={formStyle}>
       

        {/* Project name */}
        <div style={inputContainerStyle}>
          <input type="text" id="projectName" style={inputStyle} />
          <label htmlFor="projectName" style={labelStyle}>Project name</label>
        </div>

        {/* Project information */}
        <div style={inputContainerStyle}>
          <textarea id="projectInfo" rows="4" style={{ ...inputStyle, ...textareaStyle }}></textarea>
          <label htmlFor="projectInfo" style={{ ...labelStyle, top: '1.5rem' }}>Project information</label>
        </div>

        {/* Estimated Value */}
        <div style={inputContainerStyle}>
          <input type="text" id="estimatedValue" style={inputStyle} />
          <label htmlFor="estimatedValue" style={labelStyle}>Estimated Value: Rs.0</label>
        </div>

        {/* Submit button */}
        <button type="button" style={buttonStyle}>Submit</button>
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
  backgroundColor: '#f8f9fa', // Optional background color for the whole page
  padding: '1rem', // Padding for small screens
  boxSizing: 'border-box',
};

const formStyle = {
  width: '100%',
  maxWidth: '600px', // Limit the width of the form
  backgroundColor: '#ffffff', // Background color for the form
  padding: '2rem', // Padding inside the form
  borderRadius: '0.5rem', // Rounded corners
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Box shadow for the form
  boxSizing: 'border-box',
  '@media (max-width: 768px)': {
    padding: '1rem', // Reduce padding for smaller screens
  }
};

const inputContainerStyle = {
  marginBottom: '1rem',
  position: 'relative',
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem', // Increased padding for better touch target size
  fontSize: '1rem',
  border: '1px solid #ced4da',
  borderRadius: '0.25rem',
  boxSizing: 'border-box', // Include padding and border in the element's total width and height
  '@media (max-width: 576px)': {
    padding: '0.5rem', // Reduce padding for very small screens
  }
};

const labelStyle = {
  position: 'absolute',
  top: '0.5rem',
  left: '0.75rem',
  fontSize: '1rem',
  color: '#6c757d',
  pointerEvents: 'none',
  transition: 'transform 0.15s ease-out, font-size 0.15s ease-out',
};

const textareaStyle = {
  resize: 'vertical',
};

const buttonStyle = {
  backgroundColor: '#2F8D46',
  color: 'white',
  width: '100%',
  height: '38px',
  borderRadius: '8px',
  border: 'none',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '@media (max-width: 576px)': {
    height: '36px', // Adjust button height
    fontSize: '0.875rem', // Adjust font size
  }
};
