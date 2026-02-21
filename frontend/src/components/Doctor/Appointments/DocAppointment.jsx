import React from "react";
import Today from "../../Dashboards/Doctor/Today";
import { NavLink } from "react-router-dom";
import patients from "../../Profile/PatientProfile/ProfileDesignPatient";

const DocAppointment = () => {

  const appointments = [
    { patientId: 1, time: "10:00 AM", status: "Confirmed" },
    { patientId: 2, time: "11:30 AM", status: "Pending" },
    { patientId: 1, time: "2:00 PM", status: "Completed" },
  ];

  const stats = {
    Confirmed: appointments.filter(a => a.status === "Confirmed").length,
    Pending: appointments.filter(a => a.status === "Pending").length,
    Completed: appointments.filter(a => a.status === "Completed").length,
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    marginTop: "30px",
  };

  const leftColumn = {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const rightColumn = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const buttonStyle =
    "inline-flex items-center justify-center px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg";

  return (
    <div style={containerStyle}>

      {/* LEFT */}
      <div style={leftColumn}>
        <h1 className="text-2xl font-bold text-blue-700">
          My Appointments
        </h1>

        {appointments.map((item, idx) => {

          const patient =
            patients.find(p => p.id === item.patientId);

          return (
            <div key={idx}
              className="bg-white p-4 rounded-lg shadow-sm flex flex-col gap-2"
            >

              <Today
                name={patient?.name}
                time={item.time}
                status={item.status}
              />

              <div className="flex gap-2">

                {/* ✅ IMPORTANT FIX */}
                <NavLink
                  to={`/doctor/appointments/${item.patientId}`}
                  className={buttonStyle}
                >
                  View Details
                </NavLink>

                <button className={buttonStyle}>
                  Reschedule
                </button>

              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT */}
      <div style={rightColumn}>
        <div className="bg-white p-4 rounded-lg text-center">
          <h2>Confirmed</h2>
          <p>{stats.Confirmed}</p>
        </div>

        <div className="bg-white p-4 rounded-lg text-center">
          <h2>Pending</h2>
          <p>{stats.Pending}</p>
        </div>

        <div className="bg-white p-4 rounded-lg text-center">
          <h2>Completed</h2>
          <p>{stats.Completed}</p>
        </div>
      </div>

    </div>
  );
};

export default DocAppointment;