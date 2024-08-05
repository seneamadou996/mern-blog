// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bfbb1.firebaseapp.com",
  projectId: "mern-blog-bfbb1",
  storageBucket: "mern-blog-bfbb1.appspot.com",
  messagingSenderId: "643029723606",
  appId: "1:643029723606:web:6f01115f454ce864a89c77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);