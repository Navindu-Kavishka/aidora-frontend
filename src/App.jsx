import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FundLogin from './pages/FundLogin/FundLogin'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/login" element={<FundLogin/>}></Route>
      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
