// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtmQb7RxvPG6C_TDrdnPR3-UYZ1tXnNrw",
  authDomain: "spotify-9aa6a.firebaseapp.com",
  projectId: "spotify-9aa6a",
  storageBucket: "spotify-9aa6a.appspot.com",
  messagingSenderId: "632935200021",
  appId: "1:632935200021:web:894752b74a053aab83251c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

console.log("firebase.js");
