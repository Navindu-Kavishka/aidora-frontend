import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom'; 
import OngoingProject from './pages/OngoingProject';
import CompletedProject from './pages/CompletedProject';
import CanceledProject from './pages/CanceledProject';

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
    <BrowserRouter>
    <Routes>
    
      <Route path='/OngoingProject' element={<OngoingProject/>}/>
      <Route path='/CompletedProject' element={<CompletedProject/>}/>
      <Route path='/CanceledProject' element={<CanceledProject/>}/>
     
     
    </Routes>
    </BrowserRouter>
    

  );
};

export default App;
