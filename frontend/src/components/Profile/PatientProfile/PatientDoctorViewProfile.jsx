import React from "react";
import { useParams } from "react-router-dom";
import doctor from "../../Profile/DoctorProfile/ProfileDesignDoctor";

const PatientDoctorViewProfile = () => {

  const { id } = useParams();

  const selectedDoctor = doctor.find(
    (doc) => String(doc.id) === String(id)
  );

  if (!selectedDoctor) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        No Doctor Found
      </h2>
    );
  }

  // ---------- Styles from DoctorPatientViewProfile ----------
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
  // -----------------------------------------------------------

  return (
    <div style={containerStyle}>

      {/* ================= PROFILE CARD ================= */}
      <div style={profileCard}>
        <h2 style={{ marginBottom: "20px", fontSize: "30px", fontWeight: "700", color: "#1f2937" }}>
          Doctor Profile
        </h2>

        <img
          src={selectedDoctor.profilePicture}
          alt={selectedDoctor.name}
          style={imageStyle}
        />

        <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937" }}>
          {selectedDoctor.name}
        </h3>
        <p style={{ color: "#6b7280" }}>{selectedDoctor.email}</p>
        <p style={{ color: "#6b7280" }}>{selectedDoctor.phone}</p>
      </div>

      {/* ================= PERSONAL INFO ================= */}
      <div style={infoCard}>
        <h2 style={{ marginBottom: "20px", fontSize: "30px", fontWeight: "700", color: "#1f2937"}}>
          Personal Information
        </h2>

        <div style={rowStyle}>
          <span style={labelStyle}>Specialization</span>
          <span style={valueStyle}>{selectedDoctor.specialization}</span>
        </div>

        <div style={rowStyle}>
          <span style={labelStyle}>Experience</span>
          <span style={valueStyle}>{selectedDoctor.experience}</span>
        </div>

        <div style={rowStyle}>
          <span style={labelStyle}>Address</span>
          <span style={valueStyle}>{selectedDoctor.address}</span>
        </div>

        <div style={rowStyle}>
          <span style={labelStyle}>Ratings</span>
          <span style={valueStyle}>⭐ {selectedDoctor.ratings}</span>
        </div>

      </div>

    </div>
  );
};

export default PatientDoctorViewProfile;