import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom'; 
import OngoingProject from './pages/OngoingProject';
import CompletedProject from './pages/CompletedProject';
import CanceledProject from './pages/CanceledProject';
import ChatBox from './components/ChatBox';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    
      <Route path='/OngoingProject' element={<OngoingProject/>}/>
      <Route path='/CompletedProject' element={<CompletedProject/>}/>
      <Route path='/CanceledProject' element={<CanceledProject/>}/>
      <Route path='/ChatBox' element={<ChatBox/>}/>
     
     
    </Routes>
    </BrowserRouter>
    

  );
};

export default App;
