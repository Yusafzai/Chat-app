import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA9MuI35kYkdyf5LVXvIeUXlOHkSqldHhg",
    authDomain: "facebook-messenger-clone-23e50.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-23e50.firebaseio.com",
    projectId: "facebook-messenger-clone-23e50",
    storageBucket: "facebook-messenger-clone-23e50.appspot.com",
    messagingSenderId: "350308992228",
    appId: "1:350308992228:web:072e27e5190e7b32ed98f1",
    measurementId: "G-QN74XTM00R"
  });

  const db = firebaseApp.firestore();
  export default db;

