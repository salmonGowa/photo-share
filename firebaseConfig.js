// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBUvJia6HjjeSBRARJrV0jjofkAZiKD6E",
  authDomain: "photo-sharing-9c6de.firebaseapp.com",
  projectId: "photo-sharing-9c6de",
  storageBucket: "photo-sharing-9c6de.appspot.com",
  messagingSenderId: "113832132012",
  appId: "1:113832132012:web:ce0c5f41c6402d39dfce09",
  measurementId: "G-PLGDS8NMKD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
