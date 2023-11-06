// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVk0-sXexdUilvVbRtR1Gf6-_p5yCaeds",
  authDomain: "myliverestrurant.firebaseapp.com",
  projectId: "myliverestrurant",
  storageBucket: "myliverestrurant.appspot.com",
  messagingSenderId: "668712472478",
  appId: "1:668712472478:web:9ff145499d5554b414908f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;