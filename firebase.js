import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyARpS3C4THYN5j4RRVR_3ZCTEUPwF8sbSY",
  authDomain: "harehoops-fa7ab.firebaseapp.com",
  projectId: "harehoops-fa7ab",
  storageBucket: "harehoops-fa7ab.firebasestorage.app",
  messagingSenderId: "720065129040",
  appId: "1:720065129040:web:fa9f033f866bd2b2593f55",
  measurementId: "G-G4WDJ36PEJ"
};


const app = initializeApp(firebaseConfig);


// EXPORTA O BANCO
export const db = getFirestore(app);