// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2MHpqvIf-aUn2Cr1BXwT_VHBkITbPbQY",
  authDomain: "safqa-f2d65.firebaseapp.com",
  projectId: "safqa-f2d65",
  storageBucket: "safqa-f2d65.appspot.com",
  messagingSenderId: "222494886271",
  appId: "1:222494886271:web:9a55258b5863214d25b24a",
  measurementId: "G-91LQQGDMZR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
