import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDASnPupoYnGkDgFvaC8UCNsWMbYWx-d-k",
  authDomain: "clone-fdfef.firebaseapp.com",
  projectId: "clone-fdfef",
  storageBucket: "clone-fdfef.firebasestorage.app",
  messagingSenderId: "256246077520",
  appId: "1:256246077520:web:88054392df098a92d25955",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
