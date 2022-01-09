import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3kqkCuWGr_fJCxAX5DHuZLOElgAjAVMA",
  authDomain: "linkin-clone-react.firebaseapp.com",
  projectId: "linkin-clone-react",
  storageBucket: "linkin-clone-react.appspot.com",
  messagingSenderId: "844478761363",
  appId: "1:844478761363:web:5fd5ff4ebf120643170066",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
