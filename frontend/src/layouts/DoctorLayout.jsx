import React from 'react'
import { Outlet } from 'react-router-dom'
import NavDoc from '../components/Dashboards/Doctor/NavDoc'

const DoctorLayout = () => {
  return (
    <>
      <NavDoc/>
      <div className="p-6">
        <Outlet />
      </div>
    </>
  )
}

export default DoctorLayout
