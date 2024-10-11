// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDINWUyrDXSsbcnBd_SP2cLD67XNI5-6i8",
  authDomain: "contact-app-75112.firebaseapp.com",
  projectId: "contact-app-75112",
  storageBucket: "contact-app-75112.appspot.com",
  messagingSenderId: "833285263763",
  appId: "1:833285263763:web:6f94db1d3e17bb7f941866"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);