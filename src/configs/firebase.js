import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdrr_3qnUqd8Hp9B4lo96RLNlUv3QuClA",
  authDomain: "imoney-63d4a.firebaseapp.com",
  projectId: "imoney-63d4a",
  storageBucket: "imoney-63d4a.appspot.com",
  messagingSenderId: "901495703019",
  appId: "1:901495703019:web:6636d8069664f5df2485ae",
  measurementId: "G-3XPPKQ7V5Y",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFireStore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFireStore, timestamp };
