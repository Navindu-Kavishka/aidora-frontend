import React from 'react'
import UserLogin from "./pages/UserLogin/UserLogin";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage"
import RegisterPage from './pages/RegisterPage/RegisterPage';
import UserProfile from './pages/UserProfile/UserProfile';
import AboutUs from './pages/AboutUs/AboutUs';


function App() {
  return (
    <>
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/userprofile' element={<UserProfile/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
    </Routes>
    </BrowserRouter>
  </div>
    </>
  )
}

export default App;
