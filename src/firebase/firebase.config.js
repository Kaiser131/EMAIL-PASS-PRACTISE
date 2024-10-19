// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxHwMQuFjG1YdP6cznRs_ab75SHkbElkI",
    authDomain: "email-pass-practise-9aa9f.firebaseapp.com",
    projectId: "email-pass-practise-9aa9f",
    storageBucket: "email-pass-practise-9aa9f.appspot.com",
    messagingSenderId: "846743970106",
    appId: "1:846743970106:web:3227a8948719464cbe3003"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;