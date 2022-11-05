// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrbRepnM4qKmrZULvCNJr9hAnYRZIib6E",
  authDomain: "psrf-8cccd.firebaseapp.com",
  projectId: "psrf-8cccd",
  storageBucket: "psrf-8cccd.appspot.com",
  messagingSenderId: "628860216591",
  appId: "1:628860216591:web:35243ebf8ff4021f2dca7a",
  measurementId: "G-871E37CW5Q"
};

const app = initializeApp(firebaseConfig);
export const authetication = getAuth(app);