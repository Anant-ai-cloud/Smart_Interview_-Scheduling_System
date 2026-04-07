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
        
            <Signup/>
       

      },
      {},
      {},
      {},
      {},
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
      <RouterProvider router={router}/>
      <Toaster />
    </Provider>
  </StrictMode>,
)
