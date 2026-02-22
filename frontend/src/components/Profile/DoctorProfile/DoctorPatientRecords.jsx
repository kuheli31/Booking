import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import patients from '../PatientProfile/ProfileDesignPatient';
import doctors from '../../Profile/DoctorProfile/ProfileDesignDoctor';

const DoctorPatientRecords = () => {
  const { id: patientId } = useParams();

  const selectedPatient = patients.find((p) => String(p.id) === String(patientId));

  if (!selectedPatient) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>No Patient Found</h2>;
  }

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px"
  };

  const cardStyle = {
    width: '400px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    backgroundColor: '#ffffff',
    marginBottom: '20px'
  };

  return (
    <div style={containerStyle}>
      {selectedPatient.records.map((rec) => {
        // Find doctor for the record
        const doctor = doctors.find(doc =>
          doc.name.toLowerCase().includes(
            rec.doctor.replace("Dr. ", "").toLowerCase()
          )
        );

        if (!doctor) return null;

        return (
          <div key={rec.id} style={cardStyle}>
            {/* NavLink now includes patientId and doctorId */}
            <NavLink to={`/doctor/patient/${patientId}/records/doctor/${doctor.id}`}>
              <h2 style={{
                marginBottom: '15px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1e40af'
              }}>
                {rec.doctor}
              </h2>
            </NavLink>

            <p><strong>Date:</strong> {rec.date}</p>
            <p><strong>Specialization:</strong> {rec.specialization}</p>
            <p><strong>Diagnosis:</strong> {rec.diagonosis}</p>
            <p><strong>Notes:</strong> {rec.notes}</p>

            {rec.files?.length > 0 && (
              <>
                <h4><strong>Download Reports & Prescriptions👇</strong></h4>
                {rec.files.map((file, index) => (
                  <a
                    key={index}
                    href={file.url}
                    download
                    style={{
                      display: "block",
                      marginTop: "8px",
                      padding: "8px",
                      background: "#2563eb",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "6px",
                      textAlign: "center"
                    }}
                  >
                    Download {file.name}
                  </a>
                ))}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DoctorPatientRecords;