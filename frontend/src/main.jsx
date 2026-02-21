import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import DoctorViewProfile from './components/Profile/DoctorProfile/DoctorViewProfile.jsx'
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
import Upcoming from './components/Dashboards/Patient/Upcoming.jsx'
import AppointHistory from './components/Patient/Appointments/AppointHistory.jsx'
import { PatientProvider } from './context/Patient/PatientContext.jsx'
import { DoctorProvider } from './context/Doctor/DoctorContext.jsx'
import PatientViewProfile from './components/Profile/PatientProfile/PatientViewProfile.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SignUp />} />

      <Route path='/patient' element={<PatientLayout />}>     
        <Route path="dashboard" element={<Upcoming />} />
        <Route path="appointments" element={<AppointHistory/>} />
        <Route path="records" element={<Records/>} />
        <Route path='chats' element={<Chat/>}/>
        <Route path='profile' element={<PatientViewProfile />}/>
        <Route path="appointments/:id"  element={<DocProfile />} />
      </Route> 

      <Route path="/doctor" element={<DoctorLayout />}>
        <Route path="dashboard" element={<DoctorDashboard />} />
        <Route path="appointments" element={<Appointment />} />
        <Route path="availability" element={<Avail />} />
        <Route path='chats' element={<DocChat />} />
        <Route path='profile' element={<DoctorViewProfile />}/>
        <Route path="appointments/:id"  element={<PatProfile />} 
/>
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DoctorProvider>
      <PatientProvider>
        <RouterProvider router={router} />
      </PatientProvider>
    </DoctorProvider>
  </StrictMode>
)
