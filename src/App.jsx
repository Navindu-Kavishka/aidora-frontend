import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FundLogin from './pages/FundLogin/FundLogin'
import FundRegister from './pages/FundRegister/FundRegister'
import FundDashboard from './pages/FundDashboard/FundDashboard'
import CreateProject from './pages/CreateProject/CreateProject'
import EditProfile from './pages/EditProfile/EditProfile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/frlogin" element={<FundLogin/>}></Route>
      <Route path="/frregister" element={<FundRegister/>}></Route>
      <Route path="/frdashboard" element={<FundDashboard/>}></Route>
      <Route path="/frcreate" element={<CreateProject/>}></Route>
      <Route path="/fredit" element={<EditProfile/>}></Route>
    

      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
