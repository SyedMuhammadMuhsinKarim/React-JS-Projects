// Import Firebase as well as any extensions. In this case we're just adding on Firestore (our database)
import firebase from "firebase";
import "firebase/firestore";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA2NCPHMZMLONSvHCBlKsiTcqIqLjQ6e5E",
    authDomain: "react-quiz-app-f1d15.firebaseapp.com",
    databaseURL: "https://react-quiz-app-f1d15.firebaseio.com",
    projectId: "react-quiz-app-f1d15",
    storageBucket: "react-quiz-app-f1d15.appspot.com",
    messagingSenderId: "440044887479"
  };
  firebase.initializeApp(config);

export default firebase;