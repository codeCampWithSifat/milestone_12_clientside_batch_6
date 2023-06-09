import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
    };

    const updateUser = (userInfo) => {
       return updateProfile(auth.currentUser, userInfo)
    }

    const signInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };

    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
         return signInWithPopup(auth,googleProvider)

    }

    const logOutUser = () => {
        setLoading(true);
       return signOut(auth)
    }

    useEffect(() => {
       const unsubscribe=  onAuthStateChanged(auth,(currentUser) => {

                // console.log("User Observing Carefully", )
                setUser(currentUser)
                setLoading(false);
            
        })
        return () => unsubscribe
    },[user])
    const authInfo = {
        createUser,
        signInUser,
        user,
        logOutUser,
        updateUser,
        loading,
        googleLogin
    }
  return (
    <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
