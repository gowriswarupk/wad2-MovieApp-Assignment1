// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.YOUR_APIKEY,
  authDomain: process.env.YOUR_AUTHDOMAIN,
  projectId: process.env.YOUR_PROJECTID,
  storageBucket: process.env.YOUR_STORAGEBUCKET,
  messagingSenderId: process.env.YOUR_MESSAGINGSENDERID,
  appId: process.env.YOUR_APPID,
  measurementId: process.env.YOUR_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);