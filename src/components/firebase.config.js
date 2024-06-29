// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXpgkAkIBPsvIWp8RcMgikd1qA77m4Ong",
  authDomain: "cryptoz-1930d.firebaseapp.com",
  projectId: "cryptoz-1930d",
  storageBucket: "cryptoz-1930d.appspot.com",
  messagingSenderId: "1667160644",
  appId: "1:1667160644:web:e120eea682fb80c076ba11",
  measurementId: "G-Z4MXYC96S1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
