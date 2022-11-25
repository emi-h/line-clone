// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth, GoogleAuthProvider } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY as string,
  appId: "1:281714841625:web:bafb81e111facfed71f288",
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN as string,
  messagingSenderId: "281714841625",
  projectId: "line-clone2-c341e",
  storageBucket: "line-clone2-c341e.appspot.com",
};

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig);

export const provider: GoogleAuthProvider = new GoogleAuthProvider();

// ↓引数にappを入れること
export const auth: Auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const database: Firestore = getFirestore();
