



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnEGzEFbE6OujXWEzNcyVIJamAhEC2JEc",
  authDomain: "fb-bds-dath.firebaseapp.com",
  databaseURL: "https://fb-bds-dath-default-rtdb.firebaseio.com",
  projectId: "fb-bds-dath",
  storageBucket: "fb-bds-dath.appspot.com",
  messagingSenderId: "532545968964",
  appId: "1:532545968964:web:c66cb1a40e11f3371f1511",
  measurementId: "G-MGG5Z8SRV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const data = getDatabase(app)


