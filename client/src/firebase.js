// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "techie-s-blog.firebaseapp.com",
  projectId: "techie-s-blog",
  storageBucket: "techie-s-blog.appspot.com",
  messagingSenderId: "17781981396",
  appId: "1:17781981396:web:b0f206788754673f5c3b41"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);