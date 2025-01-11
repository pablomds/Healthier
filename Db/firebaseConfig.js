// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3CaUAluFfQ0aXw6rleVs3F3U4IBZUspA",
  authDomain: "healthier-84ebf.firebaseapp.com",
  projectId: "healthier-84ebf",
  storageBucket: "healthier-84ebf.firebasestorage.app",
  messagingSenderId: "70429617594",
  appId: "1:70429617594:web:6aee01788ec9cf0d7c0183",
  measurementId: "G-CVZBRVVLLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);