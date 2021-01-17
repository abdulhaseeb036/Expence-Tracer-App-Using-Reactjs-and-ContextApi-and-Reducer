import firebase from "firebase/app"

var firebaseConfig = {
    apiKey: "AIzaSyCcxwebWVyPrCrfoNaUASlZ1dMF3ymQqQA",
    authDomain: "expencetrackerwebapplication.firebaseapp.com",
    projectId: "expencetrackerwebapplication",
    storageBucket: "expencetrackerwebapplication.appspot.com",
    messagingSenderId: "264709690096",
    appId: "1:264709690096:web:3dd1117ccf77099585a835",
    measurementId: "G-2130C8CZ6S"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);