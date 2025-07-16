// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi3vT8iuGG9j7A9Q_c1ANBrCbQl_birL0",
  authDomain: "node-api-rest-1192c.firebaseapp.com",
  projectId: "node-api-rest-1192c",
  storageBucket: "node-api-rest-1192c.firebasestorage.app",
  messagingSenderId: "1095053756164",
  appId: "1:1095053756164:web:b74a5e1d2d415ed93c7251"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };