import React from 'react';
import Today from '../../Dashboards/Doctor/Today';

const DocAppointment = () => {
  // Dummy data for patients
  const appointments = [
    { name: "John Doe", time: "10:00 AM", status: "Confirmed" },
    { name: "Jane Smith", time: "11:30 AM", status: "Pending" },
    { name: "Michael Johnson", time: "2:00 PM", status: "Completed" },
    { name: "Emily Davis", time: "3:30 PM", status: "Confirmed" },
    { name: "Sophia Brown", time: "4:15 PM", status: "Pending" },
  ];

  // Calculate Quick Stats
  const stats = {
    Confirmed: appointments.filter(a => a.status === "Confirmed").length,
    Pending: appointments.filter(a => a.status === "Pending").length,
    Completed: appointments.filter(a => a.status === "Completed").length,
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    marginTop: '30px',
  };

  const leftColumn = {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const rightColumn = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const buttonStyle =
    "inline-flex items-center justify-center px-4 py-2 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg";

  return (
    <div style={containerStyle}>
      {/* Left Column: Appointments */}
      <div style={leftColumn}>
        <h1 className="text-2xl font-bold text-blue-700">My Appointments</h1>

        {/* Appointment Cards */}
        {appointments.map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow-sm flex flex-col gap-2">
            <Today name={item.name} time={item.time} status={item.status} />
            <div className="flex gap-2">
              <button className={buttonStyle}>View Details</button>
              <button className={buttonStyle}>Reschedule</button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column: Quick Stats */}
      <div style={rightColumn}>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <h2 className="text-lg font-semibold">Confirmed</h2>
          <p className="text-2xl font-bold">{stats.Confirmed}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <h2 className="text-lg font-semibold">Pending</h2>
          <p className="text-2xl font-bold">{stats.Pending}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <h2 className="text-lg font-semibold">Completed</h2>
          <p className="text-2xl font-bold">{stats.Completed}</p>
        </div>
      </div>
    </div>
  );
};

export default DocAppointment;
