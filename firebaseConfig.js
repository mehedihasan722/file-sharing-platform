// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeovFmznlbdMk23xvewujifjvrKAPZcA8",
  authDomain: "file-sharing-e55ae.firebaseapp.com",
  projectId: "file-sharing-e55ae",
  storageBucket: "file-sharing-e55ae.firebasestorage.app",
  messagingSenderId: "392017228918",
  appId: "1:392017228918:web:3599663bb8d697f88ddb57",
  measurementId: "G-7S8H6N2PXH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
