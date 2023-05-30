import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import { auth,provider} from '../config';
import { signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";

function Login() {

    const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const userEmail = userCredential.user.email;
        setEmail(userEmail);
        localStorage.setItem("email", userEmail);
      })
      .catch((error) => {
        console.log("Error occurred during sign-in with Google:", error);
      });
  };

  const handleSignInWithEmail = () => {
    const email = prompt('Ingrese su correo electrónico:');
    const password = prompt('Ingrese su contraseña:');

    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const userEmail = userCredential.user.email;
          setEmail(userEmail);
          localStorage.setItem("email", userEmail);
        })
        .catch((error) => {
          console.log("Error occurred during sign-in with email and password:", error);
        });
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setEmail('');
        localStorage.removeItem("email");
      })
      .catch((error) => {
        console.log("Error occurred during sign-out:", error);
      });
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

return (
  <>
  <div class="contenedor" >
    <h1>Interstellar</h1>
    </div>    
    <div class="contenedor2" >
      <h1>INICIAR SESION </h1>
    </div>
    <div class="contenedor3" >
      <button class='button3' onClick={handleSignInWithGoogle}>
        GOOGLE
      </button>
      <button class='button2'onClick={handleSignInWithEmail}>
        Email
      </button>
    </div>

  </>
 
);
}

export default Login;
