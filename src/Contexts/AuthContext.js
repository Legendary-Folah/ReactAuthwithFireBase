import React, { useContext, useState, useEffect } from 'react'
// import auth from '../Firebase/Firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext();
const auth = getAuth();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
const [currentUser, setCurrentUser] = useState()

function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
}

useEffect(() => {
    const unSubscribe = onAuthStateChanged( auth, (user) => {
        setCurrentUser(user)
    });
    return unSubscribe;
}, [])

const value = {
    currentUser,
    signup
}

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

