// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: "line-clone-92dff",
  storageBucket: "line-clone-92dff.appspot.com",
  messagingSenderId: "1034751671440",
  appId: "1:1034751671440:web:c9fe4fa6447404afcd6c15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

// ↓引数にappを入れること
export const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const database = getFirestore(app);