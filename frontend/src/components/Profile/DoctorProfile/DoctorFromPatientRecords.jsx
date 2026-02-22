import React from "react";
import { useParams } from "react-router-dom";
import doctors from "../../Profile/DoctorProfile/ProfileDesignDoctor";
import patients from "../../Profile/PatientProfile/ProfileDesignPatient";

const DoctorFromPatientRecords = () => {
  const { patientId, doctorId } = useParams();

  const patient = patients.find(p => String(p.id) === String(patientId));
  const doctor = doctors.find(d => String(d.id) === String(doctorId));

  if (!patient || !doctor) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Invalid Patient or Doctor</h2>;
  }

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "30px",
    padding: "40px",
    backgroundColor: "#f5f7fb",
    minHeight: "100vh",
    flexWrap: "wrap"
  };

  const profileCard = {
    width: "350px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    padding: "30px",
    textAlign: "center"
  };

  const infoCard = {
    width: "450px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    padding: "30px"
  };

  const imageStyle = {
    width: "130px",
    height: "130px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #e5e7eb",
    marginBottom: "20px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  };

  const rowStyle = { display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #eee" };
  const labelStyle = { fontWeight: "600", color: "#374151" };
  const valueStyle = { color: "#6b7280" };

  return (
    <div style={containerStyle}>
      <div style={profileCard}>
        <h2 style={{ marginBottom: "20px", fontSize: "30px", fontWeight: "700" }}>Doctor Profile</h2>
        <img src={doctor.profilePicture} alt={doctor.name} style={imageStyle} />
        <h3 style={{ fontSize: "24px", fontWeight: "600" }}>{doctor.name}</h3>
        <p>{doctor.specialization}</p>
        <p>{doctor.email}</p>
        <p>{doctor.phone}</p>
      </div>

      <div style={infoCard}>
        <h2 style={{ marginBottom: "20px", fontSize: "30px", fontWeight: "700" }}>Professional Information</h2>

        <div style={rowStyle}><span style={labelStyle}>Experience</span><span style={valueStyle}>{doctor.experience}</span></div>
        <div style={rowStyle}><span style={labelStyle}>Specialization</span><span style={valueStyle}>{doctor.specialization}</span></div>
        <div style={rowStyle}><span style={labelStyle}>Gender</span><span style={valueStyle}>{doctor.gender}</span></div>
        <div style={rowStyle}><span style={labelStyle}>Hospital</span><span style={valueStyle}>{doctor.address}</span></div>
        <div style={rowStyle}><span style={labelStyle}>Ratings</span><span style={valueStyle}>{doctor.ratings}</span></div>

        <div style={{ marginTop: "30px" }}>
          <p><strong>Viewing from Patient:</strong> {patient.name}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorFromPatientRecords;