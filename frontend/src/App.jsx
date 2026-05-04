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
import { useSelector } from 'react-redux'
import DashboardLayout from './components/DashboardLayout.jsx'

function App() {
 const dispatch = useDispatch()
 const status = useSelector(state=> state.auth.status)

  useEffect(()=>{

    dispatch(isLoggedIn())
  },[])


  return  (

    <div>
      
      <Outlet/>


    </div>
    )

  
}

export default App
