// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjF7T1vGRK1xIPV1FTk8_MDsf4F0JLZYY",
  authDomain: "superiorminds-475ef.firebaseapp.com",
  projectId: "superiorminds-475ef",
  storageBucket: "superiorminds-475ef.appspot.com",
  messagingSenderId: "375801489284",
  appId: "1:375801489284:web:a415195908cd097cbd1fd1",
  measurementId: "G-2R9CRKNF8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);