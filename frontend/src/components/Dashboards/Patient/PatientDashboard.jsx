import React from 'react'

function PatientDashboard({ name, status, specialization, date, time }) {
  const cardStyle = {
    width: '280px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    backgroundColor: '#ffffff'
  }

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
    fontSize: '20px'
  }

  return (
    <div style={cardStyle}>
      <div style={rowStyle}>
        <strong>Doctor:</strong>
        <span>{name}</span>
      </div>

      <div style={rowStyle}>
        <strong>Status:</strong>
        <span>{status}</span>
      </div>

      <div style={rowStyle}>
        <strong>Specialization:</strong>
        <span>{specialization}</span>
      </div>

      <div style={rowStyle}>
        <strong>Date:</strong>
        <span>{date}</span>
      </div>

      <div style={rowStyle}>
        <strong>Time:</strong>
        <span>{time}</span>
      </div>

      <button style={{ margin: '10px 5px', padding: '8px 12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}> View Details</button>
      <button style={{ margin: '10px 5px', padding: '8px 12px', backgroundColor: '#ffc107', color: 'black', border: 'none', borderRadius: '4px' }}> Reschedule</button>
    </div>
  )
}

export default PatientDashboard