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
import PatientLayout from './layouts/PatientLayout'
import PatAppoint from './components/Patient/Appointments/PatAppoint.jsx'
import Records from './components/Patient/Records/Records.jsx'
import Chat from './components/Patient/Chats/Chat.jsx'
import PatProfile from './components/Profile/PatientProfile/PatProfile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SignUp />} />

      <Route path='/patient' element={<PatientLayout />}>     
        <Route path="dashboard" element={<PatientDashboard />} />
        <Route path="appointments" element={<PatAppoint/>} />
        <Route path="records" element={<Records/>} />
        <Route path='chats' element={<Chat/>}/>
        <Route path='profile' element={<PatProfile/>}/>
      </Route> 

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
