import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import storage from './store/storage.js'
import { Toaster } from "react-hot-toast"
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Authprotect from './components/Authprotect.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Signup from './pages/Signup.jsx'
import Admin from './pages/Dashboard/Admin.jsx'
import Hr from "./pages/dashboard/Hr.jsx"
import Candidate from './pages/Dashboard/Candidate.jsx'
import Interviewer from "./pages/dashboard/Interviewer.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {

        path: "/",
        element:

          <Login />


      },
      {

        path: "/signup",
        element:

          <Signup />


      },
      {

        path: "/admindashboard",
        element:

          <Admin />


      },
      {

        path: "/interviewerdashboard",
        element:

          <Interviewer />


      },
      {

        path: "/hrdashboard",
        element:
        
          <Hr />

      },
      {

        path: "/dashboard",
        element:

          <Candidate />

      },
      {},
      {},
      {},
      {}
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={storage}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </StrictMode>,
)
