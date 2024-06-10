import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Form = () => {
  return (
    <div className="form-fullscreen" style={fullscreenStyle}>
      <form className="form-container" style={formStyle}>
      
        <div className="form-input-container" style={inputContainerStyle}>
          <input type="text" id="formProjectName" className="form-input" style={inputStyle} />
          <label htmlFor="formProjectName" className="form-label" style={labelStyle}>Project name</label>
        </div>

        
        <div className="form-input-container" style={inputContainerStyle}>
          <textarea id="formProjectInfo" rows="4" className="form-textarea" style={{ ...inputStyle, ...textareaStyle }}></textarea>
          <label htmlFor="formProjectInfo" className="form-label" style={{ ...labelStyle, top: '1.5rem' }}>Project information</label>
        </div>

        
        <div className="form-input-container" style={inputContainerStyle}>
          <input type="text" id="formEstimatedValue" className="form-input" style={inputStyle} />
          <label htmlFor="formEstimatedValue" className="form-label" style={labelStyle}>Estimated Value: Rs.0</label>
        </div>

        
        <button type="button" className="form-button" style={buttonStyle}>Submit</button>
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
  backgroundColor: '#f8f9fa', 
  padding: '1rem', 
  boxSizing: 'border-box',
};

const formStyle = {
  width: '100%',
  maxWidth: '800px', 
  backgroundColor: '#ffffff',
  padding: '2rem', 
  borderRadius: '0.5rem', 
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
  boxSizing: 'border-box',
  '@media (max-width: 768px)': {
    padding: '1rem', 
  }
};

const inputContainerStyle = {
  marginBottom: '1rem',
  position: 'relative',
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem', 
  fontSize: '1rem',
  border: '1px solid #ced4da',
  borderRadius: '0.25rem',
  boxSizing: 'border-box', 
  '@media (max-width: 576px)': {
    padding: '0.5rem', 
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
    height: '36px', 
    fontSize: '0.875rem', 
  }
}
