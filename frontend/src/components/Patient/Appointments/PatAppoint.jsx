import React from 'react'
import { NavLink } from 'react-router-dom'

const PatAppoint = () => {
  return (
    <div>
      <h2>PatAppoint</h2>
      <NavLink to="/patient/appointments">
        Appointments
      </NavLink>
    </div>
  )
}

export default PatAppoint