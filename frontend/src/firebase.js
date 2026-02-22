// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2Ol23yeDELvDm1S0VHNtmYKofo_F62kw",
  authDomain: "medical-booking-f87b9.firebaseapp.com",
  projectId: "medical-booking-f87b9",
  storageBucket: "medical-booking-f87b9.firebasestorage.app",
  messagingSenderId: "167121051705",
  appId: "1:167121051705:web:619f164736c5e1018c2de8",
  measurementId: "G-EMB8Z7NGG2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);