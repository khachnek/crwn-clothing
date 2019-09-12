import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB0xYYmZhTF8vdibnbHHzh1kYLqMo5IaY4",
  authDomain: "crwn-db-764f9.firebaseapp.com",
  databaseURL: "https://crwn-db-764f9.firebaseio.com",
  projectId: "crwn-db-764f9",
  storageBucket: "",
  messagingSenderId: "327803182924",
  appId: "1:327803182924:web:f9d85e488ce3a1285bb9e9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
