import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD3CaUAluFfQ0aXw6rleVs3F3U4IBZUspA",
  authDomain: "healthier-84ebf.firebaseapp.com",
  databaseURL: "https://healthier-84ebf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "healthier-84ebf",
  storageBucket: "healthier-84ebf.firebasestorage.app",
  messagingSenderId: "70429617594",
  appId: "1:70429617594:web:6aee01788ec9cf0d7c0183",
  measurementId: "G-CVZBRVVLLW"
};

let app;

if (!app) {
    app = initializeApp(firebaseConfig);
}

export const auth = getAuth(app);
