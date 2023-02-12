// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqlem2IhyoY_m_qQ_z6dBRrrXoRqiMRgQ",
  authDomain: "tips-react-firebase.firebaseapp.com",
  projectId: "tips-react-firebase",
  storageBucket: "tips-react-firebase.appspot.com",
  messagingSenderId: "539892242951",
  appId: "1:539892242951:web:71e573fe4d0efe53afe8a2",
  measurementId: "G-P99SS36KL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)