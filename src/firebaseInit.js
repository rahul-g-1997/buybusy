// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtDREZSsRLrcjteWi0Gq1zB0JgW4MqcnY",
  authDomain: "buybusy-4609a.firebaseapp.com",
  projectId: "buybusy-4609a",
  storageBucket: "buybusy-4609a.appspot.com",
  messagingSenderId: "23372575217",
  appId: "1:23372575217:web:41dd1db690936cbee7d450",
  measurementId: "G-QHRQCBB8SL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
