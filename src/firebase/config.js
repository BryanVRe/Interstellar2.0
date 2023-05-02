import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCSiKmMPVrd8DNfqDe3TOuzGPd26ot08vY",
  authDomain: "interstellar-app.firebaseapp.com",
  projectId: "interstellar-app",
  storageBucket: "interstellar-app.appspot.com",
  messagingSenderId: "897620471586",
  appId: "1:897620471586:web:c0fa29e378895077c93f7b"
};

const app = firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


const auth = getAuth(app);

export { projectStorage, projectFirestore, timestamp, auth };
