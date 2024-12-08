// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {

apiKey: "AIzaSyCDhKzSWQjAu_N5lh9kHj8Um0SA1cUGTCc",
  authDomain: "sports-facility-booking-pl.firebaseapp.com",
  projectId: "sports-facility-booking-pl",
  storageBucket: "sports-facility-booking-pl.firebasestorage.app",
  messagingSenderId: "163022688926",
  appId: "1:163022688926:web:810887ba390e5c98dea18f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication and provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();