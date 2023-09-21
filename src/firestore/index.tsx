// firebase.js

import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwm3zbBOd4wj0kYXm3RQ-NkfRcr83aC1w",
  authDomain: "chating-application-d4db4.firebaseapp.com",
  projectId: "chating-application-d4db4",
  storageBucket: "chating-application-d4db4.appspot.com",
  messagingSenderId: "970792128215",
  appId: "1:970792128215:web:c1deb5f0e3495aa445ea92",
  measurementId: "G-X0N1YDH293"
};

export const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)





