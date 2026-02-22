import { createContext, useContext } from "react"
import patient from "../../components/Profile/PatientProfile/ProfileDesignPatient";

const PatientContext= createContext()

export const PatientProvider=({children})=>{
    const logInPatientId = 4;

    const selectedPatient = patient.find(p => p.id === logInPatientId);

    return(
        <PatientContext.Provider value={selectedPatient}>
            {children}
        </PatientContext.Provider>
    );
};

export const usePatient=() => useContext(PatientContext);