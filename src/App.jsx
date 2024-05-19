import { useState } from 'react'
import './App.css'
import AdminLogin from './pages/AdminLogin/AdminLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AdminLogin/>
      
    </>
  )
}

export default App
