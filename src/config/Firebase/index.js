import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJkg5G9PYMFy2qRf72y9H19ro_g-kudRs",
  authDomain: "rawstck.firebaseapp.com",
  databaseURL:
    "https://rawstck-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rawstck",
  storageBucket: "rawstck.appspot.com",
  messagingSenderId: "1059668643977",
  appId: "1:1059668643977:web:47d685b5610126d4153658",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
