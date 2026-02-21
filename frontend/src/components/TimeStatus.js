import patients from "./Profile/PatientProfile/ProfileDesignPatient";
import doctors from "./Profile/DoctorProfile/ProfileDesignDoctor";

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
  patient.records.map((record, index) => {

    // ✅ find doctor using name
    const matchedDoctor = doctors.find(
      (doc) => doc.name === record.doctor
    );

    return {
      appointmentId: appointmentId++,

      patientId: patient.id,
      recordId: record.id,

      doctorId: matchedDoctor?.id || null,

      doctorName: record.doctor,
      specialization: record.specialization,
      date: record.date,

      time: timeSlots[index % timeSlots.length],
      status: statusList[index % statusList.length]
    };
  })
);

export default TimeStatus;