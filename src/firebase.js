import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDFY24uSmRhXU_8DWjaCRffAwrQP3CoGPg",
  authDomain: "twitter-clone-ccd9c.firebaseapp.com",
  databaseURL: "https://twitter-clone-ccd9c.firebaseio.com",
  projectId: "twitter-clone-ccd9c",
  storageBucket: "twitter-clone-ccd9c.appspot.com",
  messagingSenderId: "132068483965",
  appId: "1:132068483965:web:6087d7e9a007552d60a214",
  measurementId: "G-1XTDLSH4BS"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();