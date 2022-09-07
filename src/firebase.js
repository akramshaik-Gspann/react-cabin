import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAN5383k9sBWUgH9aYTeaI30lRvIgxv3pk",
    authDomain: "react-firebase-auth-a6627.firebaseapp.com",
    projectId: "react-firebase-auth-a6627",
    storageBucket: "react-firebase-auth-a6627.appspot.com",
    messagingSenderId: "675311495346",
    appId: "1:675311495346:web:da7a944cbd0d63191a41ab"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider, db };