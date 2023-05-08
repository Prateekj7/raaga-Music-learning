// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdof2BKPOoXmh01V4JXFdTX3sDejRETaQ",
  authDomain: "raaga-media-b7af3.firebaseapp.com",
  projectId: "raaga-media-b7af3",
  storageBucket: "raaga-media-b7af3.appspot.com",
  messagingSenderId: "627815329643",
  appId: "1:627815329643:web:e58c8216f287c81c2fa62e",
  measurementId: "G-9SMGCBTWSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;