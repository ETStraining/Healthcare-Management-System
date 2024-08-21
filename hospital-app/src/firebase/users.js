
import {addDoc, collection, getDocs} from "firebase/firestore";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {DB, AUTH} from "./config.js";

const dbRef =  collection(DB, "users");

export const createUser = async (userData) => {
    try {
        const { firstName, lastName, email, phone, description, role, department } = userData;
        const userCredential = await createUserWithEmailAndPassword(AUTH, email, "12345678"); //Register user in firebase Authentication with 1..8 as password
        const user = userCredential.user;

        await addDoc(dbRef, {
            uid: user.uid, // Store Firebase Auth user ID
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            description: description,
            role: role,
            department: department,
            createdAt: new Date(),
        })
    }catch (error) {
        console.error("Error creating user: ", error);
        throw error;
    }
}


export const getAllUsers = async () => {
    try{
        const querySnapshot = await getDocs(dbRef);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    }catch (error) {
        console.log("Fetching users Error", error);
        throw error;
    }
}