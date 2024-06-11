import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';
import ProjectCard from '../components/ProjectCard';

const CanceledProject = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  const allProjects = [
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'PURE WATER PROJECT',
      category: 'Water & Sanitation',
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'WATER SUBSIDIZED PROJECT',
      category: 'Water & Sanitation',
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'EDUCATION PROJECT',
      category: 'Education',
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'WELFARE PROJECT',
      category: 'Welfare',
    },
    // Add more projects as needed
  ];

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  const containerStyle = {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: 'FFFFFF', // Add background color here
    borderRadius: '10px',
    margin: '20px auto',
    maxWidth: '1200px',
  };

  const headingStyle = {
    fontSize: isMobile ? '20px' : '24px',
    marginBottom: '20px',
  };

  const projectsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Canceled Projects</h2>
      <Buttons 
        selectedCategory={selectedCategory} 
        onSelectCategory={handleSelectCategory} 
      />
      <div style={projectsContainerStyle}>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            onViewProject={() => alert(`Viewing project: ${project.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default CanceledProject;
