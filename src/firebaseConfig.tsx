// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

import { getStorage } from "firebase/storage";
import { 
  getAuth, 
  signOut, 
  createUserWithEmailAndPassword, 
  updateProfile, 
  signInWithEmailAndPassword } from "firebase/auth";
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
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

const registerUser = async (email, password, displayName) => {
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    const updateDisplayName = await updateProfile(data.user, {
      displayName: displayName,
    });

    const user = data.user;

    console.log(user.displayName);
    return user.displayName;
  } catch (error)
    {
    const err = error.code;
    console.log(err);
    }
  
};


const signin = async (email, password) => {
  try {
    const data = await signInWithEmailAndPassword(auth, email, password);
    const user = data.user;
    return user.displayName;
  } catch (err) {
    return err.code;
  }
}

const logout = () => {
  signOut(auth);
};


export {
  registerUser,
  signin,
  logout,
  storage,
  db,
  auth,
}