import React from 'react';
import { Link, useParams } from 'react-router-dom';
import patients from "../PatientProfile/ProfileDesignPatient";
import { Button } from '@headlessui/react';

const DoctorPatientViewProfile = () => {

  const { id } = useParams();

  const selectedPatient = Array.isArray(patients)
    ? patients.find((pat) => String(pat.id) === String(id))
    : null;

  if (!selectedPatient) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>No Patient Found</h2>;
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

  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #eee"
  };

  const labelStyle = {
    fontWeight: "600",
    color: "#374151"
  };

  const valueStyle = {
    color: "#6b7280"
  };

  return (
    <div style={containerStyle}>

      <div style={profileCard}>
        <h2 style={{ marginBottom: "20px", fontSize: "30px", fontWeight: "700", color: "#1f2937" }}>
          Patient Profile
        </h2>

        <img
          src={selectedPatient.profilePicture}
          alt="Profile"
          style={imageStyle}
        />

        <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937" }}>
          {selectedPatient.name}
        </h3>
        <p style={{ color: "#6b7280" }}>{selectedPatient.email}</p>
        <p style={{ color: "#6b7280" }}>{selectedPatient.phone}</p>
      </div>

      <div style={infoCard}>
        <h2 style={{ marginBottom: "20px", fontSize: "30px", fontWeight: "700", color: "#1f2937"}}>
          Personal Information
        </h2>

        <div style={rowStyle}>
          <span style={labelStyle}>Gender</span>
          <span style={valueStyle}>{selectedPatient.gender}</span>
        </div>

        <div style={rowStyle}>
          <span style={labelStyle}>Date of Birth</span>
          <span style={valueStyle}>{selectedPatient.dob}</span>
        </div>

        <div style={rowStyle}>
          <span style={labelStyle}>Blood Group</span>
          <span style={valueStyle}>{selectedPatient.blood}</span>
        </div>

        <div style={rowStyle}>
          <span style={labelStyle}>Address</span>
          <span style={valueStyle}>{selectedPatient.address}</span>
        </div>

        <div className="mt-4 flex justify-between items-center">
  <Link
    to={`/doctor/patient/${id}/records`}
    className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition"
  >
    View Medical Records
  </Link>

  <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Chat
  </Button>
</div>
      </div>

    </div>
  );
};

export default DoctorPatientViewProfile;