import firebase from "firebase/compat/app";
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSiKmMPVrd8DNfqDe3TOuzGPd26ot08vY",
  authDomain: "interstellar-app.firebaseapp.com",
  projectId: "interstellar-app",
  storageBucket: "interstellar-app.appspot.com",
  messagingSenderId: "897620471586",
  appId: "1:897620471586:web:c0fa29e378895077c93f7b"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();

export{
  storage, firestore as default
}