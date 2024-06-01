import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDrhX0pbKWBoELiKjrOKDx2tn5F0oXBps0",
  authDomain: "superreacttodo.firebaseapp.com",
  projectId: "superreacttodo",
  storageBucket: "superreacttodo.appspot.com",
  messagingSenderId: "438529266002",
  appId: "1:438529266002:web:8f01a2c86c75ace322a8b",
  measurementId: "G-319MYCC6K7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
