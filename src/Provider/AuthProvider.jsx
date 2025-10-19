import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);
  //   !----------email pass login------------
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   !----------signin------------

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   !----------Update User------------
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  //   !----------onAuthStateChange------------
  useEffect(() => {
    const unScribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unScribe();
    };
  }, []);

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
    loading,
    setLoading,
    updateUser,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
