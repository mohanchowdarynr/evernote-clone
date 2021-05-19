import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAnwdCSxB6hPG_Wz0Ll1xvQGjzh2gzsvl8",
  authDomain: "evernote-e356e.firebaseapp.com",
  projectId: "evernote-e356e",
  storageBucket: "evernote-e356e.appspot.com",
  messagingSenderId: "1027233136382",
  appId: "1:1027233136382:web:b8f0f628b406d64e662faf"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export  { auth,firestore };