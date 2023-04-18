import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj91DkENgOz4qKXvt1zWmyJt1er8iPkXU",
  authDomain: "zon1-a9420.firebaseapp.com",
  projectId: "zon1-a9420",
  storageBucket: "zon1-a9420.appspot.com",
  messagingSenderId: "474475785336",
  appId: "1:474475785336:web:3a0636d2487eca5b75918d",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
export default db;
