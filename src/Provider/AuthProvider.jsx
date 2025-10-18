import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  //   !----------email pass login------------
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   !----------onAuthStateChange------------
  useEffect(() => {
    const unScribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unScribe();
    };
  }, []);
  //   !----------signin------------

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   !----------logout------------
  const logout = () => {
    return signOut(auth);
  };

  //   !Common----------------
  const authData = {
    user,
    setUser,
    creatUser,
    logout,
    signIn,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
