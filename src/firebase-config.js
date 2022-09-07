import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN5383k9sBWUgH9aYTeaI30lRvIgxv3pk",
  authDomain: "react-firebase-auth-a6627.firebaseapp.com",
  projectId: "react-firebase-auth-a6627",
  storageBucket: "react-firebase-auth-a6627.appspot.com",
  messagingSenderId: "675311495346",
  appId: "1:675311495346:web:da7a944cbd0d63191a41ab"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);