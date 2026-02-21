const patient=[
    {
        id:1,
        name:"John Doe",
        email:"john.doe@example.com",
        phone:"(123) 456-7890",
        profilePicture:"https://media.newyorker.com/photos/5d7299a5af596b00089f162b/master/w_1920,c_limit/Farrow-JeffreyEpstein-2.jpg",
        gender:"Male",
        dob:"1990-01-01",
        address:"123 Main St, Anytown, USA",
        blood:"O+",
        doctorId:[1,2],
        records:[
          {
            id:1,
            doctor:"Dr. Smith",
            date:"2024-06-01",
            specialization:"Cardiology",
            diagonosis:"Hypertension",
            notes:"Blood pressure is under control.",
            files:[
              {name:"ECG_Report.pdf",url:"#"},
              {name:"BloodTest.pdf",url:"#"}
            ]
          },
          {
            id:2,
            doctor:"Dr. Brown",
            date:"2024-05-15",
            specialization:"Orthopedics",
            diagonosis:"Fractured Arm",
            notes:"Patient is recovering well. Follow-up in 2 weeks.",
            files:[
              {name:"Xray_Report.pdf",url:"#"},
              {name:"Prescription.pdf",url:"#"}
            ]
          }
        ]
    },
    {
        id:2,
        name:"Jane Smith",
        email:"jane.smith@example.com",
        phone:"(987) 654-3210",
        profilePicture:"https://whyy.org/wp-content/uploads/2025/07/pam_bondi_epstein_records_07182025-768x512.jpg",
        gender:"Female",
        dob:"1985-05-15",
        address:"456 Elm St, Othertown, USA",
        blood:"A-",
        doctorId:[1,5,6,3,4],
        records:[
          {
            id:1,
            doctor:"Dr. Anderson",
            date:"2024-06-05",
            specialization:"Neurology",
            diagonosis:"Migraine",
            notes:"Migraines are less frequent.",
            files:[
              {name:"BrainScan.pdf",url:"#"},
                {name:"Neurology_Report.pdf",url:"#"}
            ]
          },
          { 
            id:2,
            doctor:"Dr. Davis",
            date:"2024-05-20",
            specialization:"Dermatology",
            diagonosis:"Eczema",
            notes:"Skin condition is improving.",
            files:[
              {name:"Skin_Report.pdf",url:"#"}
            ]
          },
            {
            id:3,
            doctor:"Dr. Wilson",
            date:"2024-04-10",
            specialization:"Cardiology",
            diagonosis:"Hypertension",
            notes:"Blood pressure is under control.",
            files:[
              {name:"ECG_Report.pdf",url:"#"}
            ]
          }
        ]
    },
    {
        id:3,
        name:"Alice Johnson",
        email:"alice.johnson@example.com",
        phone:"(555) 123-4567",
        profilePicture:"https://media.newyorker.com/photos/5d7299a5af596b00089f162b/master/w_1920,c_limit/Farrow-JeffreyEpstein-2.jpg",
        gender:"Female",
        dob:"1992-11-30",
        address:"789 Oak St, Somewhere, USA",
        blood:"B+",
        doctorId:[3,5,4],
        records:[
          {
            id:1,
            doctor:"Dr. Taylor",
            date:"2024-06-12",
            specialization:"Dermatology",
            diagonosis:"Acne",
            notes:"Skin condition is improving.",
            files:[
              {name:"Acne_Report.pdf",url:"#"}
            ]
            }]
    },
    {
        id:4,
        name:"Bob Williams",
        email:"bob.williams@example.com",
        phone:"(444) 987-6543",
        profilePicture:"https://whyy.org/wp-content/uploads/2025/07/pam_bondi_epstein_records_07182025-768x512.jpg",
        gender:"Male",
        dob:"1988-07-20",
        address:"321 Pine St, Anywhere, USA",
        blood:"AB-",
        doctorId:[2,4,6],
        records:[
          {
            id:1,
            doctor:"Dr. Anderson",
            date:"2024-06-08",
            specialization:"Neurology",
            diagonosis:"Migraine",
            notes:"Migraines are less frequent.",
            files:[
                {name:"BrainScan.pdf",url:"#"}
            ]
          }
        ]
    },
    {
        id:5,
        name:"Charlie Brown",
        email:"charlie.brown@example.com",
        phone:"(333) 222-1111",
        profilePicture:"https://media.newyorker.com/photos/5d7299a5af596b00089f162b/master/w_1920,c_limit/Farrow-JeffreyEpstein-2.jpg",
        gender:"Male",
        dob:"1995-03-10",
        address:"654 Maple St, Elsewhere, USA",
        blood:"O-",
        doctorId:[4],
        records:[
          {
            id:1,
            doctor:"Dr. Anderson",
            date:"2024-06-15",
            specialization:"Neurology",
            diagonosis:"Migraine",
            notes:"Migraines are less frequent.",
            files:[
                {name:"BrainScan.pdf",url:"#"}
            ]
          }
        ]
    },
    {
        id:6,
        name:"Diana Prince",
        email:"diana.prince@example.com",
        phone:"(222) 333-4444",
        profilePicture:"https://whyy.org/wp-content/uploads/2025/07/pam_bondi_epstein_records_07182025-768x512.jpg",
        gender:"Female",
        dob:"1993-09-05",
        address:"987 Cedar St, Nowhere, USA",
        blood:"AB+",
        doctorId:[5,1,2,3,4,6],
        records:[
          {
            id:1,
            doctor:"Dr. Brown",
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
            doctor:"Dr. Wilson",
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
            doctor:"Dr. Taylor",
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
            doctor:"Dr. Anderson",
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
            doctor:"Dr. Martinez",
            date:"2024-02-10",
            specialization:"Gastroenterology",
            diagonosis:"IBS",
            notes:"Symptoms are manageable.",       
            files:[
              {name:"Lab_Report.pdf",url:"#"}
            ]
          },
          {
            id:6,
            doctor:"Dr. Anderson",
            date:"2024-01-05",
            specialization:"Neurology",
            diagonosis:"Migraine",
            notes:"Migraines are less frequent.",
            files:[
              {name:"BrainScan.pdf",url:"#"}
            ]
          }
        ]  
    },
    {
        id:7,
        name:"Ethan Hunt",
        email:"ethan.hunt@example.com",
        phone:"(111) 555-6666",
        profilePicture:"https://media.newyorker.com/photos/5d7299a5af596b00089f162b/master/w_1920,c_limit/Farrow-JeffreyEpstein-2.jpg",
        gender:"Male",
        dob:"1991-02-28",
        address:"147 Birch St, Somewhere, USA",
        blood:"B-",
        doctorId:[6],
        records:[
          {
            id:1,
            doctor:"Dr. Anderson",
            date:"2024-06-20",
            specialization:"Neurology",
            diagonosis:"Migraine",
            notes:"Migraines are less frequent.",
            files:[
                {name:"BrainScan.pdf",url:"#"}
            ]
          }
        ]
    }
]

export default patient;