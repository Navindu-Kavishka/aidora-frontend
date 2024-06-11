import React from 'react';

const ProjectCard = ({ image, title, onViewProject }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    width: '300px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0',
  };

  const titleStyle = {
    fontSize: '18px', // Change the font size here
    margin: '10px 0',
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#037149',
    color: '#fff', // Change the text color
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imageStyle} />
      <h3 style={titleStyle}>{title}</h3>
      <button style={buttonStyle} onClick={onViewProject}>View Project</button>
    </div>
  );
};

export default ProjectCard;
