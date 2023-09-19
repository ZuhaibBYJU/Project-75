import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAIYFfhUIP9gXePNAu55gwdSHyw15N7nQg",
  authDomain: "e-library-app-4969b.firebaseapp.com",
  databaseURL: "https://e-library-app-4969b-default-rtdb.firebaseio.com",
  projectId: "e-library-app-4969b",
  storageBucket: "e-library-app-4969b.appspot.com",
  messagingSenderId: "440358514296",
  appId: "1:440358514296:web:67f9c3f1a7d059a7b9078d",
  measurementId: "G-VT100370E4"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
