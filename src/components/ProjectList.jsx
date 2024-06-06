import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          onViewProject={() => alert(`Viewing project: ${project.title}`)}
        />
      ))}
    </div>
  );
};

export default ProjectList;
