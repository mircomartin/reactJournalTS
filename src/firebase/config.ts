// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN68z2GbvAHZCPUlZVuXq-gGOOblUKTBA",
  authDomain: "react-ts-journal.firebaseapp.com",
  projectId: "react-ts-journal",
  storageBucket: "react-ts-journal.appspot.com",
  messagingSenderId: "121799051704",
  appId: "1:121799051704:web:14433e12eb01ea74e9674d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );