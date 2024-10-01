// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIvD-lH8wbtZhrSRLefE-Zdfm_OjwmVWY",
  authDomain: "react-dragon-news-auth-49e1b.firebaseapp.com",
  projectId: "react-dragon-news-auth-49e1b",
  storageBucket: "react-dragon-news-auth-49e1b.appspot.com",
  messagingSenderId: "115130034645",
  appId: "1:115130034645:web:5848c8493fa369b569f55c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;