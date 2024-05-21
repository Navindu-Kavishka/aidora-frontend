import React from 'react'
import UserLogin from "./pages/UserLogin/UserLogin";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage"


function App() {
  return (
    <>
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/home' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  </div>
    </>
  )
}

export default App;
