import patients from "./Profile/PatientProfile/ProfileDesignPatient";

const statusList = ["Completed", "Pending", "Confirmed", "Cancelled"];

const timeSlots = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:00 PM",
  "04:30 PM"
];

let appointmentId = 1;

const TimeStatus = patients.flatMap((patient) =>
  patient.records.map((record, index) => ({
    appointmentId: appointmentId++,

    patientId: patient.id,
    recordId: record.id,   // ✅ ADD THIS

    doctorId: patient.doctorId[index],

    doctorName: record.doctor,
    specialization: record.specialization,
    date: record.date,

    time: timeSlots[index % timeSlots.length],
    status: statusList[index % statusList.length]
  }))
);

export default TimeStatus;