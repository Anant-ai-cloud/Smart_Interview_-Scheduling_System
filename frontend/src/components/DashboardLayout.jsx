import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar.jsx'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className='relative'>
      
  
      <Sidebar/>
      <Topbar/>
      
      <div className='absolute left-96 top-20'>
      <Outlet/>
      </div>
      
    </div>
  )
}

export default DashboardLayout
