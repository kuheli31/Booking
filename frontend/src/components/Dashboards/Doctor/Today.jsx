import React from 'react';
import { Link } from 'react-router-dom';

function Today({ name, time, status, patientId }) {

  let statusColor = 'text-gray-500';
  if (status === 'Confirmed') statusColor = 'text-green-600';
  if (status === 'Pending') statusColor = 'text-yellow-600';
  if (status === 'Completed') statusColor = 'text-blue-600';

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">

      {/* Clickable Patient Name */}
      <Link
        to={`/doctor/appointments/${patientId}`}
        className="text-lg text-blue-900 font-semibold w-1/3 hover:underline"
      >
        {name}
      </Link>

      <p className="text-lg text-gray-500 w-1/3">{time}</p>

      <p className={`text-sm font-medium ${statusColor} w-1/3 text-right`}>
        {status}
      </p>

    </div>
  );
}

export default Today;