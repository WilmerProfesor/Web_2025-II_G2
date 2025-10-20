// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi0Lh8pkQP5LHFWqS8LautxlTqNdemHjw",
  authDomain: "wilmerweb1-2025-ii.firebaseapp.com",
  projectId: "wilmerweb1-2025-ii",
  storageBucket: "wilmerweb1-2025-ii.firebasestorage.app",
  messagingSenderId: "514753156727",
  appId: "1:514753156727:web:94ad544b5af6391f249872"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;