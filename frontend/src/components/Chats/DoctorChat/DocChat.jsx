import React from 'react'
import { NavLink } from 'react-router-dom'

const DocChat = () => {
  return (
    <div>
      <NavLink
        to="/doctor/chats"
        className="px-4 py-2 bg-blue-400 text-white rounded-md"
      >
        View Chats
      </NavLink>
    </div>
  )
}

export default DocChat