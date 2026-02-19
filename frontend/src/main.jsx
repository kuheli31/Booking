import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import SignUp from './components/Sign/Signup.jsx'
import PatientDashboard from './components/Dashboards/Patient/PatientDashboard.jsx'
import DoctorDashboard from './components/Dashboards/Doctor/DoctorDashboard.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<SignUp/>}/>
      <Route path='/patient/dashboard' element={<PatientDashboard/>}/>
      <Route path='/doctor/dashboard' element={<DoctorDashboard/>}/>
    
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
