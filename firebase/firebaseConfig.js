import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD3CaUAluFfQ0aXw6rleVs3F3U4IBZUspA",
  authDomain: "healthier-84ebf.firebaseapp.com",
  databaseURL:
    "https://healthier-84ebf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "healthier-84ebf",
  storageBucket: "healthier-84ebf.firebasestorage.app",
  messagingSenderId: "70429617594",
  appId: "1:70429617594:web:6aee01788ec9cf0d7c0183",
  measurementId: "G-CVZBRVVLLW",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Use the default app if already initialized
};
export { firebase };
