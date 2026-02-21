import { Calendar1Icon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import RecHistory from './RecHistory'

const Records = () => {

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px"
  };

  const rec=[
    {
      id:1,
      name:"Dr. Brown",
      date:"2024-06-10",
      specialization:"Orthopedics",
      diagonosis:"Fractured Arm",
      notes:"Patient is recovering well. Follow-up in 2 weeks.",
      files:[
        {name:"Prescription.pdf",url:"#"},
        {name:"Xray_Report.pdf",url:"#"}
      ]
    },
    {
      id:2,
      name:"Dr. Wilson",
      date:"2024-05-22",
      specialization:"Cardiology",
      diagonosis:"Hypertension",
      notes:"Blood pressure is under control.",
      files:[
        {name:"ECG_Report.pdf",url:"#"}
      ]
    },
    {
      id:3,
      name:"Dr. Taylor",
      date:"2024-04-18",
      specialization:"Dermatology",
      diagonosis:"Eczema",
      notes:"Skin condition is improving.",
      files:[
        {name:"Skin_Report.pdf",url:"#"}
      ]
    },
    {
      id:4,
      name:"Dr. Anderson",
      date:"2024-03-15",
      specialization:"Neurology",
      diagonosis:"Migraine",
      notes:"Migraines are less frequent.",
      files:[
        {name:"BrainScan.pdf",url:"#"}
      ]
    },
    {
      id:5,
      name:"Dr. Martinez",
      date:"2024-02-10",
      specialization:"Gastroenterology",
      diagonosis:"IBS",
      notes:"Symptoms are manageable.",
      files:[
        {name:"Lab_Report.pdf",url:"#"}
      ]
    }
  ]

  return (
    <div style={containerStyle}>
      {rec.map((rec)=>
        <RecHistory
          key={rec.id}
          name={rec.name}
          date={rec.date}
          specialization={rec.specialization}
          diagonosis={rec.diagonosis}
          notes={rec.notes}
          files={rec.files}   
        />
      )}
    </div>
  )
}

export default Records