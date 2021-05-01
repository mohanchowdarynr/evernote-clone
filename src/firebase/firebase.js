import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBFMQfqZz1XSN8KSr3ovMhs7qYpNWpEoVs",
  authDomain: "evernote-ca571.firebaseapp.com",
  projectId: "evernote-ca571",
  storageBucket: "evernote-ca571.appspot.com",
  messagingSenderId: "660173913224",
  appId: "1:660173913224:web:a8a24b34b86d6c6f67333d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const projectFirestore = firebaseApp.firestore();
// const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
export { projectFirestore,timestamp};
