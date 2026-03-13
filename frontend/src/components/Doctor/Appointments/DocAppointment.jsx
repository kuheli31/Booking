import React, { useEffect, useState } from "react";
import Today from "../../Dashboards/Doctor/Today";
import { NavLink } from "react-router-dom";

const DocAppointment = () => {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_SPRING_API_URL;

    fetch(`${API_URL}/doctor/appointments`)
      .then(res => res.json())
      .then(data => setAppointments(data))
      .catch(err => console.error(err));
  }, []);

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

        {appointments.map((item) => {

          const formattedDate = new Date(item.date).toLocaleDateString();

          const formattedTime = new Date(`1970-01-01T${item.time}`)
            .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

          return (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-sm flex flex-col gap-2"
            >

              <Today
                name={item.patient?.name}
                time={formattedTime}
                status={item.status}
              />

              {/* NEW DATE DISPLAY */}
              <p className="text-gray-600 text-sm">
                Date: {formattedDate}
              </p>

              <div className="flex gap-2">

                <NavLink
                  to={`/doctor/appointments/${item.patient?.id}`}
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