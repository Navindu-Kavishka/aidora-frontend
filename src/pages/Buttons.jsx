import React from 'react';

const Buttons = ({ selectedCategory, onSelectCategory }) => {
  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    margin: '5px',
    flex: '1',
    textAlign: 'center',
    minWidth: '120px'
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ff6b6b',
    color: 'white'
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px'
  };

  return (
    <div style={containerStyle}>
      <button
        style={selectedCategory === 'All' ? activeButtonStyle : buttonStyle}
        onClick={() => onSelectCategory('All')}
      >
        All
      </button>
      <button
        style={selectedCategory === 'Education' ? activeButtonStyle : buttonStyle}
        onClick={() => onSelectCategory('Education')}
      >
        Education
      </button>
      <button
        style={selectedCategory === 'Welfare' ? activeButtonStyle : buttonStyle}
        onClick={() => onSelectCategory('Welfare')}
      >
        Welfare
      </button>
      <button
        style={selectedCategory === 'Water & Sanitation' ? activeButtonStyle : buttonStyle}
        onClick={() => onSelectCategory('Water & Sanitation')}
      >
        Water & Sanitation
      </button>
    </div>
  );
};

export default Buttons;
