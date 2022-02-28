import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBg0-O5dt4zukYggTMMX0S5H28Qezkjejs",
  authDomain: "books-stores-f09ef.firebaseapp.com",
  projectId: "books-stores-f09ef",
  storageBucket: "books-stores-f09ef.appspot.com",
  messagingSenderId: "825624472501",
  appId: "1:825624472501:web:a227ca53fd1658902387fc",
  measurementId: "G-8DY1N5JG2R",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
