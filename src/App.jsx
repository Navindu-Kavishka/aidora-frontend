import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FundLogin from './pages/FundLogin/FundLogin'
import FundRegister from './pages/FundRegister/FundRegister'
import SideBar from './layouts/SideBar/SideBar'
import FundDashboard from './pages/FundDashboard/FundDashboard'
import CreateProject from './pages/CreateProject/CreateProject'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/login" element={<FundLogin/>}></Route>
      <Route path="/register" element={<FundRegister/>}></Route>
      <Route path="/sidebar" element={<SideBar/>}></Route>
      <Route path="/dashboard" element={<FundDashboard/>}></Route>
      <Route path="/create" element={<CreateProject/>}></Route>


      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
