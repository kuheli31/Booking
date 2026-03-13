import React, { useEffect, useState } from 'react';
import History from './History';
import Today from './Today';

const DoctorDashboard = () => {

  const [appointments, setAppointments] = useState([]);
  const [todayAppointments, setTodayAppointments] = useState([]);

  useEffect(() => {

    const API_URL = import.meta.env.VITE_SPRING_API_URL;

    fetch(`${API_URL}/doctor/appointments`)
      .then(res => res.json())
      .then(data => {

        setAppointments(data);

        const today = new Date().toISOString().split("T")[0];

        const todayData = data.filter(a => a.date === today);
        setTodayAppointments(todayData);

      })
      .catch(err => console.error(err));

  }, []);

  /* --------- STATS --------- */

  const totalPatients = new Set(
    appointments.map(a => a.patient?.id)
  ).size;

  const pendingReviews = appointments.filter(
    a => a.status === "Pending"
  ).length;

  const currentMonth = new Date().getMonth();
  const thisMonth = appointments.filter(a => {
    const appointmentMonth = new Date(a.date).getMonth();
    return appointmentMonth === currentMonth;
  }).length;

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '30px',
    fontSize: '25px'
  };

  const see = {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  };

  return (
    <div>

      {/* Dashboard stats */}
      <div style={containerStyle}>
        <History num={todayAppointments.length} name="Today's Appointments"/>
        <History num={totalPatients} name="Total Patients"/>
        <History num={pendingReviews} name="Pending Reviews"/>
        <History num={thisMonth} name="This Month"/>
      </div>

      {/* Today's Appointments */}
      <div style={see}>
        <h1 className="text-2xl font-bold mt-6 mb-4">
          Today's Appointments
        </h1>

        {todayAppointments.map((item) => {

          const time = new Date(`1970-01-01T${item.time}`)
            .toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});

          return (
            <Today
              key={item.id}
              name={item.patient?.name}
              time={time}
              status={item.status}
              patientId={item.patient?.id}
            />
          );
        })}

      </div>
    </div>
  );
}

export default DoctorDashboard;