import React, { useState } from 'react'
import PatAppoint from './PatAppoint'

const AppointHistory = () => {

  const [filter, setFilter] = useState("All")

  const historyData = [
    {
      id: 1,
      name: "Dr. Brown",
      status: "Completed",
      specialization: "Orthopedics",
      date: "2024-06-10",
      time: "11:00 AM"
    },
    {
      id: 2,
      name: "Dr. Wilson",
      status: "Completed",
      specialization: "Cardiology",
      date: "2024-05-22",
      time: "3:30 PM"
    },
    {
      id: 3,
      name: "Dr. Taylor",
      status: "Cancelled",
      specialization: "Dermatology",
      date: "2024-04-18",
      time: "1:00 PM"
    }
  ]

  // Filter logic
  const filteredData =
    filter === "All"
      ? historyData
      : historyData.filter(app => app.status === filter)

  const buttonStyle = (type) => ({
    padding: '8px 16px',
    marginRight: '10px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500',
    backgroundColor: filter === type ? '#007bff' : '#f0f0f0',
    color: filter === type ? '#fff' : '#333',
    transition: '0.3s'
  })

  return (
    <div style={{ padding: '30px' }}>

      <h1 style={{ marginBottom: '20px', fontSize: '32px', fontWeight: 'bold' }}>
        Appointment History
      </h1>

      {/* Filter Buttons */}
      <div style={{ marginBottom: '25px', display: 'flex', flexWrap: 'wrap' }}>
        <button style={buttonStyle("All")} onClick={() => setFilter("All")}>All</button>
        <button style={buttonStyle("Completed")} onClick={() => setFilter("Completed")}>Completed</button>
        <button style={buttonStyle("Pending")} onClick={() => setFilter("Pending")}>Pending</button>
        <button style={buttonStyle("Confirmed")} onClick={() => setFilter("Confirmed")}>Confirmed</button>
        <button style={buttonStyle("Cancelled")} onClick={() => setFilter("Cancelled")}>Cancelled</button>
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}
      >
        {filteredData.length > 0 ? (
          filteredData.map((appointment) => (
            <PatAppoint
              key={appointment.id}
              name={appointment.name}
              status={appointment.status}
              specialization={appointment.specialization}
              date={appointment.date}
              time={appointment.time}
            />
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </div>

    </div>
  )
}

export default AppointHistory