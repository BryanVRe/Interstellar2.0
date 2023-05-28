import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSiKmMPVrd8DNfqDe3TOuzGPd26ot08vY",
  authDomain: "interstellar-app.firebaseapp.com",
  projectId: "interstellar-app",
  storageBucket: "interstellar-app.appspot.com",
  messagingSenderId: "897620471586",
  appId: "1:897620471586:web:c0fa29e378895077c93f7b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};