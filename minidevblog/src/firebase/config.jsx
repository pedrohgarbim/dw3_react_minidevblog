
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaYOvpNnrgR9EyQ4Gmt0fk6OfVeIUtofY",
  authDomain: "minidevblogveasey.firebaseapp.com",
  projectId: "minidevblogveasey",
  storageBucket: "minidevblogveasey.appspot.com",
  messagingSenderId: "750012235472",
  appId: "1:750012235472:web:02c545317c4f4befdc68d5",
  measurementId: "G-9MENEPNY72"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}