import { useEffect, useState } from 'react'
import Login from './pages/Login.jsx'
import { Outlet } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import "./index.css"
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import { useDispatch } from 'react-redux'
import { isLoggedIn } from './setup/authThunk.js'

function App() {
 const dispatch = useDispatch()
  useEffect(()=>{

    dispatch(isLoggedIn())
  },[])


  return (

    <div>
      
      <Outlet/>


    </div>

  )
}

export default App
