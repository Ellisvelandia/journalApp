import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB2VMIoYq6CGDrAJmlTdr8ouHSGcjcCm5g",
  authDomain: "react-journal-191af.firebaseapp.com",
  projectId: "react-journal-191af",
  storageBucket: "react-journal-191af.appspot.com",
  messagingSenderId: "927158499486",
  appId: "1:927158499486:web:b745a41931f28d14d5a38f",
};

export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
