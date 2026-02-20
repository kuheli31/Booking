import React from 'react'
import PatientDashboard from './PatientDashboard'

const Upcoming = () => {
  return (
    <div style={{ padding: '30px' }}>
      <h1 className='font-bold text-4xl mb-8'>
        Upcoming Appointments
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}
      >
        <PatientDashboard 
          name="Dr. Smith" 
          status="Confirmed" 
          specialization="Cardiology" 
          date="2024-07-15" 
          time="10:00 AM"
        />

        <PatientDashboard 
          name="Dr. Johnson" 
          status="Pending" 
          specialization="Dermatology" 
          date="2024-07-16" 
          time="11:30 AM"
        />

        <PatientDashboard 
          name="Dr. Lee" 
          status="Confirmed" 
          specialization="Pediatrics" 
          date="2024-07-17" 
          time="2:00 PM"
        />
      </div>
    </div>
  )
}

export default Upcoming