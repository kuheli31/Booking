import React, { useEffect, useState } from "react";
import Today from "../../Dashboards/Doctor/Today";
import { NavLink } from "react-router-dom";

const DocAppointment = () => {

  const [appointments, setAppointments] = useState([]);

  const [rescheduleId, setRescheduleId] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  const API_URL = import.meta.env.VITE_SPRING_API_URL;

  /* -------- FETCH APPOINTMENTS -------- */

  useEffect(() => {
    fetch(`${API_URL}/doctor/appointments`)
      .then(res => res.json())
      .then(data => setAppointments(data))
      .catch(err => console.error("Fetch Error:", err));
  }, [API_URL]);

  /* -------- STATS -------- */

  const stats = {
    Confirmed: appointments.filter(a => a.status === "Confirmed").length,
    Pending: appointments.filter(a => a.status === "Pending").length,
    Completed: appointments.filter(a => a.status === "Completed").length,
  };

  /* -------- RESCHEDULE -------- */

  const handleReschedule = async () => {

    if (!newDate || !newTime) {
      alert("Please select date and time");
      return;
    }

    try {

      const res = await fetch(
        `${API_URL}/doctor/appointments/${rescheduleId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            date: newDate,
            time: newTime
          })
        }
      );

      if (!res.ok) {

  const errorText = await res.text();
  alert(errorText);

  return;
}

      const updated = appointments.map(a =>
        a.id === rescheduleId
          ? { ...a, date: newDate, time: newTime }
          : a
      );

      setAppointments(updated);

      setRescheduleId(null);
      setNewDate("");
      setNewTime("");

      alert("Appointment Rescheduled Successfully");

    } catch (err) {
      console.error("Reschedule Error:", err);
    }
  };

  /* -------- STYLES -------- */

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

      {/* LEFT COLUMN */}
      <div style={leftColumn}>

        <h1 className="text-2xl font-bold text-blue-700">
          My Appointments
        </h1>

        {appointments.map((item) => {

          const formattedDate = item.date
            ? new Date(item.date).toLocaleDateString()
            : "";

          const formattedTime = item.time
            ? new Date(`1970-01-01T${item.time}`)
                .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            : "";

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

                <button
                  onClick={() => {
                    setRescheduleId(item.id);
                    setNewDate(item.date);
                    setNewTime(item.time);
                  }}
                  className={buttonStyle}
                >
                  Reschedule
                </button>

              </div>

              {/* RESCHEDULE FORM */}
              {rescheduleId === item.id && (

                <div className="mt-3 flex gap-2 items-center">

                  <input
                  id="reschedule-date"
                  name="rescheduleDate"
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="border p-2 rounded"
                  />

                  <input
                  id="reschedule-time"
                  name="rescheduleTime"
                    type="time"
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    className="border p-2 rounded"
                  />

                  <button
                    onClick={handleReschedule}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => setRescheduleId(null)}
                    className="bg-gray-400 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>

                </div>

              )}

            </div>

          );

        })}

      </div>

      {/* RIGHT COLUMN */}
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