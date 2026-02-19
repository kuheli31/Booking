import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import SignUp from './components/Sign/SignUp.jsx'
import PatientDashboard from './components/Dashboards/Patient/PatientDashboard.jsx'
import DoctorDashboard from './components/Dashboards/Doctor/DoctorDashboard.jsx'
import Appointment from './components/Doctor/Appointments/DocAppointment.jsx'
import DoctorLayout from './layouts/DoctorLayout'
import Avail from './components/Doctor/Availability/Avail.jsx'
import DocChat from './components/Chats/DoctorChat/DocChat.jsx'
import DocProfile from './components/Profile/DoctorProfile/DocProfile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SignUp />} />

      <Route path="/patient/dashboard" element={<PatientDashboard />} />

      {/* ✅ Doctor Layout with nested routes */}
      <Route path="/doctor" element={<DoctorLayout />}>
        <Route path="dashboard" element={<DoctorDashboard />} />
        <Route path="appointments" element={<Appointment />} />
        <Route path="availability" element={<Avail />} />
        <Route path='chats' element={<DocChat />} />
        <Route path='profile' element={<DocProfile />} />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
