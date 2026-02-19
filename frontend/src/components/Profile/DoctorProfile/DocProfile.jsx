import React from 'react'
import { NavLink } from 'react-router-dom'

const DocProfile = () => {
  return (
    <div>
      <NavLink
        to="/doctor/profile"
        className="px-4 py-2 bg-blue-400 text-white rounded-md"
      >
        View Profile
      </NavLink>
    </div>
  )
}

export default DocProfile