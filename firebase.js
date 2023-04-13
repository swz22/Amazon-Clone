import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhN2j9qSUV44acpPYnuTu-a-1HniHP6wA",
  authDomain: "zn22-1e98e.firebaseapp.com",
  projectId: "zn22-1e98e",
  storageBucket: "zn22-1e98e.appspot.com",
  messagingSenderId: "390759303639",
  appId: "1:390759303639:web:ed00661c3b81da1972e392",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
export default db;
