// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqlpU9uzV_ifwTtdD5CLdQYdlL_ZJ0WTc",
  authDomain: "otp-login-crypto.firebaseapp.com",
  projectId: "otp-login-crypto",
  storageBucket: "otp-login-crypto.appspot.com",
  messagingSenderId: "270968571960",
  appId: "1:270968571960:web:637ee501c4027ab0fb7ecd",
  measurementId: "G-0B96075D7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)