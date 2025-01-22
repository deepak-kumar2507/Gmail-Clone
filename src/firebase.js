// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import getAuth and GoogleAuthProvider
import { getFirestore } from "firebase/firestore"; // Import getFirestore

const firebaseConfig = {
  apiKey: "AIzaSyBLqZY45ajGgDD6MI3fSHsIafp6BBqmxWU",
  authDomain: "clone-yt-dd06c.firebaseapp.com",
  projectId: "clone-yt-dd06c",
  storageBucket: "clone-yt-dd06c.firebasestorage.app",
  messagingSenderId: "84792459721",
  appId: "1:84792459721:web:7a96c96f4f072636726818",
  measurementId: "G-TT3M7H3T77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app); // Pass the app instance to getAuth
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
