import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBg0-O5dt4zukYggTMMX0S5H28Qezkjejs",
  authDomain: "books-stores-f09ef.firebaseapp.com",
  projectId: "books-stores-f09ef",
  storageBucket: "books-stores-f09ef.appspot.com",
  messagingSenderId: "825624472501",
  appId: "1:825624472501:web:a227ca53fd1658902387fc",
  measurementId: "G-8DY1N5JG2R",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
