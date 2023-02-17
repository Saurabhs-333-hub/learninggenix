// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import firebase from 'firebase'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGZmUAFaPnaK2dXlCZF5eiqan-Wenw2GY",
    authDomain: "learinggenix.firebaseapp.com",
    projectId: "learinggenix",
    storageBucket: "learinggenix.appspot.com",
    messagingSenderId: "383350200503",
    appId: "1:383350200503:web:31247207bd285442fe9532"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);