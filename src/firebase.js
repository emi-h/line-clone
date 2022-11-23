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
  projectId: "line-clone2-c341e",
  storageBucket: "line-clone2-c341e.appspot.com",
  messagingSenderId: "281714841625",
  appId: "1:281714841625:web:bafb81e111facfed71f288"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

// ↓引数にappを入れること
export const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const database = getFirestore();