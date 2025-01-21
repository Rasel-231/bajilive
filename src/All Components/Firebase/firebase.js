// firebase.js (Firebase Configuration)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration (Ensure this is correct)
const firebaseConfig = {
  apiKey: "AIzaSyDsSg02heFFKygOJgKqz95TxfA2MuvIH9k",
  authDomain: "register-dbbe9.firebaseapp.com",
  projectId: "register-dbbe9",
  storageBucket: "register-dbbe9.firebasestorage.app",
  messagingSenderId: "684586916244",
  appId: "1:684586916244:web:2f4094d5b3ca408ce15781"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
