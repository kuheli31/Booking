// DoctorDashboard.jsx
import React from 'react';
import History from './History';
import Today from './Today';

const DoctorDashboard = () => {

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
        <History num={12} name="Today's Appointments"/>
        <History num={248} name="Total Patients"/>
        <History num={8} name="Pending Reviews"/>
        <History num={156} name="This Month"/>
      </div>

      {/* Today's Appointments */}
      <div style={see}>
        <h1 className="text-2xl font-bold mt-6 mb-4">Today's Appointments</h1>

        <Today name="John Doe" time="10:00 AM" status="Confirmed"/>
        <Today name="Jane Smith" time="11:30 AM" status="Pending"/>
        <Today name="Michael Johnson" time="2:00 PM" status="Completed"/>
        <Today name="Emily Davis" time="3:30 PM" status="Confirmed"/>
        <Today name="Sophia Brown" time="4:15 PM" status="Pending"/>
      </div>
    </div>
  );
}

export default DoctorDashboard;
