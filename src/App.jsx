import React from 'react';
import ProjectList from './ProjectList';
import OngoingProject from './pages/OngoingProject';
import ChatBox from './pages/ChatBox'

const projects = [
  {
    image: 'https://via.placeholder.com/300x200', // Replace with actual image URLs
    title: 'PURE WATER PROJECT',
  },
  {
    image: 'https://via.placeholder.com/300x200', // Replace with actual image URLs
    title: 'WATER SUBSIDIZED PROJECT',
  },
  {
    image: 'https://via.placeholder.com/300x200', // Replace with actual image URLs
    title: 'PURE WATER PROJECT',
  },
];

const App = () => {
  return (
    <div>
      <OngoingProject/>
      <ChatBox/>
      <h1 style={{ textAlign: 'center', padding: '20px' }}>Ongoing Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
