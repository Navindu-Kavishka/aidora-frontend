import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';
import ProjectCard from '../components/ProjectCard';
import ProjectList from '../components/ProjectList';

const CompletedProject = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const containerStyle = {
    padding: '20px',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: isMobile ? '20px' : '24px',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Completed Projects</h2>
      <Buttons 
        selectedCategory={selectedCategory} 
        onSelectCategory={handleSelectCategory} 
      />
      {/* You can add content related to the selected category here */}
    </div>
  );
};

export default CompletedProject;
