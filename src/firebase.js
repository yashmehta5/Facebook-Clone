import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCXYmbql5PqELr2B0xjHqZRC6huHgh_b_c",
  authDomain: "fb-clone-bba26.firebaseapp.com",
  projectId: "fb-clone-bba26",
  storageBucket: "fb-clone-bba26.appspot.com",
  messagingSenderId: "34981447355",
  appId: "1:34981447355:web:2313fb96c30cf314438b9e",
  measurementId: "G-PYYDF7T75M"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
