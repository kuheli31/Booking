import React, { useState } from 'react'
import PatAppoint from './PatAppoint'
import patients from "../../Profile/PatientProfile/ProfileDesignPatient";
import { usePatient } from '../../../context/Patient/PatientContext';
import TimeStatus from '../../TimeStatus';
import doctors from "../../Profile/DoctorProfile/ProfileDesignDoctor";
const AppointHistory = () => {
const currentPatient = usePatient();
  const [filter, setFilter] = useState("All")

  const historyData =
currentPatient?.records.map((rec) => {

  const appointment = TimeStatus.find(
    t =>
      t.patientId === currentPatient.id &&
      t.recordId === rec.id
  );

  const doctor = doctors.find(
    d => d.id === appointment?.doctorId
  );

  return {
    id: rec.id,
    doctorId: appointment?.doctorId,
    name: doctor?.name || rec.doctor,
    specialization:doctor?.specialization || rec.specialization,
    date: rec.date,
    time: appointment?.time || "N/A",
    status: appointment?.status || "Completed"
  };
}) || [];
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
            doctorId={appointment.doctorId}
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