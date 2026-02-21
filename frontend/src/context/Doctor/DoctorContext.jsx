import { createContext , useContext} from "react";
import doctor from "../../components/Profile/DoctorProfile/ProfileDesignDoctor.js";


const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
    const logInDoctorId = 5;
    
    const selectedDoctor = doctor.find(d => d.id === logInDoctorId);

    return (
        <DoctorContext.Provider value={selectedDoctor}>
            {children}
        </DoctorContext.Provider>
    );
};

export const useDoctor = () => useContext(DoctorContext);