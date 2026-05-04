import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar.jsx'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  console.log("stuck in dashboard layout")
  return (
    <div className='relative '>
      
  
      <Sidebar/>
      <Topbar/>
      
      
      <Outlet/>

      
    </div>
  )
}

export default DashboardLayout
