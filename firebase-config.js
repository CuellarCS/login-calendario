// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz3TjYN6ycqBf-g8wkFLyFhKvrD8fsr84",
  authDomain: "calendario-40abd.firebaseapp.com",
  projectId: "calendario-40abd",
  storageBucket: "calendario-40abd.appspot.com",
  messagingSenderId: "163672584813",
  appId: "1:163672584813:web:9a75ef92eaf6f306678564",
  measurementId: "G-LCQHJ7BXX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);