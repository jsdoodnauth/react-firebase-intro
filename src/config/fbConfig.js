import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDxdzk6L9gCXnemM_Ha9_j07liDyGvEYeo",
  authDomain: "jsid-marioplan.firebaseapp.com",
  databaseURL: "https://jsid-marioplan.firebaseio.com",
  projectId: "jsid-marioplan",
  storageBucket: "",
  messagingSenderId: "1097540839678"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;