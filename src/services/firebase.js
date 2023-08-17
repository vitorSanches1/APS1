import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiSYu2a19iFFOHfjBC-iE9KeDEiBju-o0",
  authDomain: "aps-chat-db.firebaseapp.com",
  projectId: "aps-chat-db",
  storageBucket: "aps-chat-db.appspot.com",
  messagingSenderId: "605678792723",
  appId: "1:605678792723:web:7987deae3e001e61590fe6",
  measurementId: "G-D1M1THPN1B"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
