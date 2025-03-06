import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";




export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const login = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const profileUpdate = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const sportsInfo = {
        user,
        createUser,
        login,
        profileUpdate,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={sportsInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;