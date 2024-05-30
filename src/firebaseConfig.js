import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBy9bwMfU3sg4TnnPHd4Aeh4vrFZ_EYGDw", // 正しいAPIキーをここに配置します
  authDomain: "todo-rect.firebaseapp.com", // Firebaseコンソールから取得したauthDomain
  projectId: "todo-rect", // Firebaseコンソールから取得したprojectId
  storageBucket: "todo-rect.appspot.com", // Firebaseコンソールから取得したstorageBucket
  messagingSenderId: "413838697199", // Firebaseコンソールから取得したmessagingSenderId
  appId: "1:413838697199:web:bf36410b2653c66eb2b11a" // Firebaseコンソールから取得したappId
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
