import React from 'react';

const Form = () => {
  return (
    <div style={fullscreenStyle}>
      <form style={{ width: '80%', margin: 'auto',marginTop:'-30px' }}>
        {/* First name */}
        <div style={{ marginBottom: '1rem', position: 'relative' }}>
          <input type="text" id="form6Example1" style={inputStyle} />
          <label htmlFor="form6Example1" style={labelStyle}>Project Id</label>
        </div>

        {/* Company name */}
        <div style={{ marginBottom: '1rem', position: 'relative' }}>
          <input type="text" id="form6Example3" style={inputStyle} />
          <label htmlFor="form6Example3" style={labelStyle}>Project name</label>
        </div>

       

        {/* Additional information */}
        <div style={{ marginBottom: '1rem', position: 'relative' }}>
          <textarea id="form6Example7" rows="4" style={{ ...inputStyle, ...textareaStyle }}></textarea>
          <label htmlFor="form6Example7" style={{ ...labelStyle, top: '1.5rem' }}>Project information</label>
        </div>

        <div style={{ marginBottom: '1rem', position: 'relative' }}>
          <input type="text" id="form6Example3" style={inputStyle} />
          <label htmlFor="form6Example3" style={labelStyle}>Estimated Value: Rs.0</label>
        </div>

      
        {/* Submit button */}
        <button type="button" style={{ backgroundColor: '#2F8D46', color: 'white',width:'100%',height:'38px',borderRadius: '8px' }}>Submit</button>
      </form>
    </div>
  );
};

export default Form;

const fullscreenStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  fontSize: '1rem',
  border: '1px solid #ced4da',
  borderRadius: '0.25rem',
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
  width: '100%',
  padding: '0.75rem',
  fontSize: '1rem',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  transition: 'background-color 0.15s ease-out',
};
