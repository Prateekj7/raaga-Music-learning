// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx8cVDlc4yUjAG_FB-oByhbqaGf0LZ6pc",
  authDomain: "raaga-project.firebaseapp.com",
  projectId: "raaga-project",
  storageBucket: "raaga-project.appspot.com",
  messagingSenderId: "14145741310",
  appId: "1:14145741310:web:dc9ef7c5445f1ea371e0af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;