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

export const createUserProfileDocument = async (userAuth, additionlData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionlData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
