import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7Q_fT7usvN8_d0rrknorlnRwSs2Lw65k",
  authDomain: "rawstock-fcfc2.firebaseapp.com",
  databaseURL: "https://rawstock-fcfc2-default-rtdb.firebaseio.com",
  projectId: "rawstock-fcfc2",
  storageBucket: "rawstock-fcfc2.appspot.com",
  messagingSenderId: "95246256314",
  appId: "1:95246256314:web:d243c36e1702804de51a83",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
