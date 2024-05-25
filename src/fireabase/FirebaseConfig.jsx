// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHdrqry-_YfPC468aC4vvFnxPKH_P8Hec",
  authDomain: "quickby-2aa50.firebaseapp.com",
  projectId: "quickby-2aa50",
  storageBucket: "quickby-2aa50.appspot.com",
  messagingSenderId: "1031176232683",
  appId: "1:1031176232683:web:7aa4ee903227eac25f68ae",
  measurementId: "G-8YHBRLTC0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
