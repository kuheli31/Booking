import patient from "../PatientProfile/ProfileDesignPatient";

const doctor=[
    {
        id:1,
        name:"Dr. John Doe",
        email:"john.doe@hospital.com",
        phone:"123-456-7890",
        specialization:"Cardiology",
        experience:"10 years",
        profilePicture:"https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1800:*",
        gender:"Male",
        address:"123 Main St, Cityville",
        ratings:4.5,
        patientID:[1,2,6]
    },
    {
        id:2,
        name:"Dr. Jane Smith",
        email:"jane.smith@hospital.com",
        phone:"987-654-3210",
        specialization:"Neurology",
        experience:"8 years",
        profilePicture:"https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?semt=ais_user_personalization&w=740&q=80",
        gender:"Female",
        address:"456 Elm St, Townsville",
        ratings:4.7,
        patientID:[1,4,6]
    },
    {
        id:3,
        name:"Dr. Emily Johnson",
        email:"emily.johnson@hospital.com",
        phone:"555-123-4567",
        specialization:"Pediatrics",
        experience:"5 years",
        profilePicture:"https://cdn.gradready.com.au/posts/images/000/000/889/thumb/Australia_Doctor.jpg?1758272306",
        gender:"Female",
        address:"789 Oak St, Villagetown",
        ratings:4.3,
        patientID:[2,3,6]
    },
    {
        id:4,
        name:"Dr. Michael Brown",
        email:"michael.brown@hospital.com",
        phone:"444-987-6543",
        specialization:"Orthopedics",
        experience:"12 years",
        profilePicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1iWM7UCc6j1DMSd9ATpxfkUZB2SeC44Kmw&s",
        gender:"Male",
        address:"321 Pine St, Hamletville",
        ratings:4.6,
        patientID:[2,3,4,6]
    },
    {
        id:5,
        name:"Dr. Sarah Davis",
        email:"sarah.davis@hospital.com",
        phone:"333-555-7890",
        specialization:"Dermatology",
        experience:"7 years",
        profilePicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ieiFAqVpefJjM23coj-s6gl3X7RqDpxo1A&s",
        gender:"Female",
        address:"654 Cedar St, Boroughville",
        ratings:4.4,
        patientID:[2,3,6]
    },
    {
        id:6,
        name:"Dr. David Wilson",
        email:"david.wilson@hospital.com",
        phone:"222-444-5555",
        specialization:"Gastroenterology",
        experience:"9 years",
        profilePicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ieiFAqVpefJjM23coj-s6gl3X7RqDpxo1A&s",
        gender:"Male",
        address:"987 Maple St, Citytown",
        ratings:4.2,
        patientID:[2,4,6,7]
    }
]

export default doctor;