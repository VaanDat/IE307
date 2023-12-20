// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAipnGmCDdrr0zXl3wQYa0ynSPc5exVekI",
  authDomain: "orderapp-cbc9b.firebaseapp.com",
  projectId: "orderapp-cbc9b",
  storageBucket: "orderapp-cbc9b.appspot.com",
  messagingSenderId: "155639905554",
  appId: "1:155639905554:web:255c154fb8c5cca37347cb",
  measurementId: "G-NBX9FSK84K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initalize Firestore
const db = getFirestore(app);

const auth = getAuth(app)
export {app, db, auth}
