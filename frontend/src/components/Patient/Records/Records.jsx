import { Calendar1Icon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import RecHistory from './RecHistory'
import patient from '../../Profile/PatientProfile/ProfileDesignPatient'
import { usePatient } from '../../../context/Patient/PatientContext';
import doctors from '../../Profile/DoctorProfile/ProfileDesignDoctor';

const Records = () => {
const currentPatient = usePatient();
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px"
  };

  

  return (
    <div style={containerStyle}>
  {currentPatient?.records.map((rec) => {

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
        diagonosis={rec.diagonosis}
        notes={rec.notes}
        files={rec.files}
      />
    );
  })}
</div>
  )
}

export default Records