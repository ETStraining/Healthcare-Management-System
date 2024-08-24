
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD-rc5-rrQxNiA5SKGmQeJVjqlRkoyF5pA",
    authDomain: "care-sync-66524.firebaseapp.com",
    projectId: "care-sync-66524",
    storageBucket: "care-sync-66524.appspot.com",
    messagingSenderId: "437986710209",
    appId: "1:437986710209:web:8d15c752aa7cc64b9f7a40"
};

const app = initializeApp(firebaseConfig);

export const AUTH = getAuth(app); // For Authentication
export const DB = getFirestore(app); //Storing data
export const STORAGE = getStorage(app); //Storing images