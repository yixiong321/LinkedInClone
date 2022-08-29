
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBf7QSBQ7qmTqmJjpgNEGL4XiKjLQ_TLoM",
    authDomain: "linkedinclone-65f2b.firebaseapp.com",
    projectId: "linkedinclone-65f2b",
    storageBucket: "linkedinclone-65f2b.appspot.com",
    messagingSenderId: "337555143995",
    appId: "1:337555143995:web:287583809946f170dacb1e"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp)
  const auth =getAuth(firebaseApp)

  export {db,auth};