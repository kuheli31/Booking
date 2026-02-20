import React from 'react';
import NavPatient from '../components/Dashboards/Patient/NavPatient';
import { Outlet } from 'react-router-dom';

const PatientLayout = () => {
  return (
    <>
      <NavPatient />
      <div className="p-6">
        <Outlet />
      </div>
    </>
  );
};

export default PatientLayout;
