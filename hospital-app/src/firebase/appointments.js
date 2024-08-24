import {DB} from "./config.js";
import {getDocDoc, collection, deleteDoc} from "firebase/firestore";
 const dbRef = collection(DB, "appointments" );

 export const getAllDepartments = async () => {
    try {
        const querySnapshot = await getDocs(dbRef);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }))
    }catch (error) {
        console.error("Error fetching appointments: ", error);
        throw new Error("Failed to fetch appointments");
    }
}

export const deleteAppointment = async (appointmentId) => {
    try {
        const appointmentRef = doc(db, "appointments", appointmentId);
        await deleteDoc(appointmentRef);
        console.log("Appointment successfully deleted!");
    } catch (error) {
        console.error("Error deleting appointment: ", error);
        throw error;
    }
}