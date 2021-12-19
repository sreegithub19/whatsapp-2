import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPKnx5_O0xbz-90Q0mHNfTj2L1UzZKdlw",
    authDomain: "whatsapp-2-38bd4.firebaseapp.com",
    projectId: "whatsapp-2-38bd4",
    storageBucket: "whatsapp-2-38bd4.appspot.com",
    messagingSenderId: "174092762404",
    appId: "1:174092762404:web:0ead68df613a7bc35dc7b1",
    measurementId: "G-CLBSF3YESP"
  };

  // connection to Firebase Database

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();


  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};
