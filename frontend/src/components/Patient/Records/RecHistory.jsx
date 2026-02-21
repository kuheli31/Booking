import React from 'react'
import { NavLink } from 'react-router-dom'

function RecHistory(props) 
{
    const cardStyle = {
        width: '400px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
        backgroundColor: '#ffffff',
        marginBottom: '20px'
    }

  return (
    <div style={cardStyle}>

        <NavLink to={`/patient/appointments/${props.id}`}>
        <h2 style={{ marginBottom: '15px', fontSize: '24px', fontWeight: 'bold', color: '#1e40af' }}>
            {props.name}
        </h2>
        </NavLink>
        <p><strong>Date:</strong> {props.date}</p>
        <p><strong>Specialization:</strong> {props.specialization}</p>
        <p><strong>Diagnosis:</strong> {props.diagonosis}</p>
        <p><strong>Notes:</strong> {props.notes}</p>
        <h4><strong>Download Reports & Prescriptions👇</strong></h4>

        {props.files?.map((file,index)=>(
          <a
            key={index}
            href={file.url}
            download
            style={{
              display:"block",
              marginTop:"8px",
              padding:"8px",
              background:"#2563eb",
              color:"#fff",
              textDecoration:"none",
              borderRadius:"6px",
              textAlign:"center"
            }}
          >
            Download {file.name}
          </a>
        ))}

    </div>
  )
}

export default RecHistory