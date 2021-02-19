import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAakCIDPOsc9373sssQdmKakVdpSBS12nA",
    authDomain: "social-media-67c27.firebaseapp.com",
    projectId: "social-media-67c27",
    storageBucket: "social-media-67c27.appspot.com",
    messagingSenderId: "1021542480350",
    appId: "1:1021542480350:web:98ae1c62eee78041f0454f",
    measurementId: "G-H4T5FLPVE3"
  };

  const firebaseApp = firebase.initializeApp
  (firebaseConfig)

  const db = firebaseApp.firestore()

  export default db;