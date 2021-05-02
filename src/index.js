import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';


firebase.initializeApp({
  apiKey: "AIzaSyBFMQfqZz1XSN8KSr3ovMhs7qYpNWpEoVs",
  authDomain: "evernote-ca571.firebaseapp.com",
  projectId: "evernote-ca571",
  storageBucket: "evernote-ca571.appspot.com",
  messagingSenderId: "660173913224",
  appId: "1:660173913224:web:a8a24b34b86d6c6f67333d",
});

ReactDOM.render(<App />, document.getElementById('root'));

