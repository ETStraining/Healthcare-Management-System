
import {getDocs, collection} from "firebase/firestore";
import {DB} from "./config.js";

const dbRef = collection(DB, "roles");

export const getAllRoles = async () => {
    try {
        const querySnapshot = await getDocs(dbRef);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    }catch (error) {
        console.error("Error fetching roles: ", error);
        throw new Error("Failed to fetch roles");
    }
}

