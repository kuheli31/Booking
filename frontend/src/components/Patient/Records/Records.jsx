import { Calendar1Icon } from 'lucide-react'
import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import RecHistory from './RecHistory'
import patient from '../../Profile/PatientProfile/ProfileDesignPatient'
import { usePatient } from '../../../context/Patient/PatientContext';
import doctors from '../../Profile/DoctorProfile/ProfileDesignDoctor';

const Records = () => {
const currentPatient = usePatient();
const [records, setRecords] = useState([]);

useEffect(() => {
  if (!currentPatient?.id) return;

  const fetchRecords = async () => {
    try {
      const API_URL = import.meta.env.VITE_SPRING_API_URL;

      console.log("API URL:", API_URL);

      const response = await fetch(
        `${API_URL}/patient/${currentPatient.id}/records`
      );

      const data = await response.json();
      setRecords(data);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  fetchRecords();
}, [currentPatient]);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px"
  };

  

  return (
    <div style={containerStyle}>
{records.map((rec) => {
    const doctor = doctors.find(doc =>
      doc.name.toLowerCase().includes(
        rec.doctor.replace("Dr. ", "").toLowerCase()
      )
    );

    return (
      <RecHistory
        key={rec.id}
        id={doctor?.id}
        name={rec.doctor}
        date={rec.date}
        specialization={rec.specialization}
        diagonosis={rec.diagnosis}
        notes={rec.notes}
        files={rec.files}
      />
    );
  })}
</div>
  )
}

export default Records