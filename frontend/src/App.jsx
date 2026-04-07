import { useState } from 'react'
import Login from './pages/Login.jsx'
import { Outlet } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div>
      <Outlet/>
   
    </div>
    
  )
}

export default App
