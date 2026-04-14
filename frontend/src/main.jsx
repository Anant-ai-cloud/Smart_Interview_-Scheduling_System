import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import storage from './store/storage.js'
import { Toaster } from "react-hot-toast"
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Authprotect from './components/Authprotect.jsx'
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom"
import Signup from './pages/Signup.jsx'
import Admin from './pages/Dashboard/Admin.jsx'
import Hr from "./pages/dashboard/Hr.jsx"
import Candidate from './pages/Dashboard/Candidate.jsx'
import Interviewer from "./pages/dashboard/Interviewer.jsx"
import SchedulePage from './pages/SchedulePage.jsx'
import Sidebar from './components/Sidebar.jsx'
import DashboardLayout from './components/DashboardLayout.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {

//         path: "/",
//         element:

       

//           <Login />

          


//       },
//       {

//         path: "/signup",
//         element:


          
//           <Signup />


//       },
//       {

//         path: "/admindashboard",
//         element:

//          <div>
//           <Sidebar/>
      
//           <Admin />
//           </div>


//       },
//       {

//         path: "/interviewerdashboard",
//         element:

//          <div>
//           <Sidebar/>
             
//           <Interviewer />
//           </div>


//       },
//       {

//         path: "/hrdashboard",
//         element:
        
//          <div>
//           <Sidebar/>
//           <Hr />
//           </div>

//       },
//       {

//         path: "/dashboard",
//         element:

//           <div>
//           <Sidebar/>
//           <Candidate />
//           </div>

//       },
//       {

//         path: "/schedule",
//         element: 
//            <div>
//           <Sidebar/>
//           <SchedulePage/>
//           </div>
          
//       },
//       {},
//       {},
//       {}
//     ]
//   }
// ])
<Routes>

  <Route path='/' element= {<Login/>}/>
  <Route path='/signup' element= {<Signup/>}/>
  <Route path='/' element= {<DashboardLayout/>}>

  <Route path='admindashboard' element= {<Admin/>}/>
  <Route path='interviewerdashboard' element= {<Interviewer/>}/>
  <Route path='admindashboard' element= {<Admin/>}/>
  <Route path='admindashboard' element= {<Admin/>}/>
  <Route path='admindashboard' element= {<Admin/>}/>
  <Route path='admindashboard' element= {<Admin/>}/>

  
   </Route>

</Routes>




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={storage}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </StrictMode>,
)
