import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import storage from './store/storage.js'
import { Toaster } from "react-hot-toast"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={storage}>
    <App />
    <Toaster/>
    </Provider>
  </StrictMode>,
)
