// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKRgXE74iFNyYFKquqV71OoqDGvfClrQ8",
  authDomain: "joshabramsportfolio.firebaseapp.com",
  projectId: "joshabramsportfolio",
  storageBucket: "joshabramsportfolio.firebasestorage.app",
  messagingSenderId: "1021751989872",
  appId: "1:1021751989872:web:cc36d195da9b78aff6c6b5",
  measurementId: "G-0W9R2QW395"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);