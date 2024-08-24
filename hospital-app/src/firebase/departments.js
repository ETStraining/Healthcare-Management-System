import {DB} from "./config.js";
import {addDoc, collection, getDocs} from "firebase/firestore";

const dbRef = collection(DB, "departments");

export const addDepartment = async (department) => {
    try {
        return await addDoc(dbRef, department);
    }catch (error) {
        console.error("Error adding department: ", error);
        throw error;
    }
}


export const getAllDepartments = async () => {
    try {
        const querySnapshot = await getDocs(dbRef);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }))
    }catch (error) {
        console.error("Error fetching departments: ", error);
        throw new Error("Failed to fetch departments");
    }
}


