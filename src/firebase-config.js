import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG2hpeYLLSRDaIfpCk7mf5D1oj1cTX824",
  authDomain: "authentication-e7d5d.firebaseapp.com",
  projectId: "authentication-e7d5d",
  storageBucket: "authentication-e7d5d.appspot.com",
  messagingSenderId: "118018350260",
  appId: "1:118018350260:web:cd25ea4e4c39b11ffacbe1",
  measurementId: "G-LYV0Y7HELY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
