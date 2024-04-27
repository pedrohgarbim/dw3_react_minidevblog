import { db } from "../firebase/config.jsx";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled(error) {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError("");
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(user, { displayName: data.displayName });

      setLoading(false);
      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.inclues("Password")) {
        systemErrorMessage = "password must be at least 6 characters long.";
      } else if (error.message.includes("email")) {
        systemErrorMessage = "email is not valid.";
      } else if(error.message.includes("email-already")) {
        systemErrorMessage = "email already in use.";
      }
      else {
        systemErrorMessage = "something went wrong, unexpected error.";
      }
      setError(systemErrorMessage);
      setLoading(false);
      console.log("criado com sucesso!")
    }
  };

  const logout = async () => {
    signOut(auth);
    console.log("deslogado com sucesso.")
  };

  const login = async(data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(" ");
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      let systemErrorMessage;

      if (error.message.inclues("user-not-found")) {
        systemErrorMessage = "user cannot be found.";
      } else if (error.message.includes("wrong-password")) {
        systemErrorMessage = "wrong password.";
      } else {
        systemErrorMessage = "something went wrong, unexpected error.";
      }

      setLoading(false);
      setError(systemErrorMessage);
      console.log("logado com sucesso!")
    }
  }

  useEffect(() => {
    return () => {
      setCancelled(true);
    };
  });

  return { auth, createUser, error, loading, logout,login };
};