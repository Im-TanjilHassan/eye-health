import firebaseAuthInit from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithRedirect , getRedirectResult } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseAuthInit()

const auth = getAuth();
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {

    // loading
    const [isLoading, setLoading] = useState(true)

    // error
    const [error, setError] = useState('')

    // user
    const [user, setUser] = useState({})

    //------------------ email and password sign up ----------------------
    const emailPassAuth = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login process
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout process
    const emailLogout = () => {
        signOut(auth)
        .then(() => {
            setUser('')
        })
        .finally(() => setLoading(false))
    }

    //------------- google signup ----------------

    // signup with pop up
    const googleSignUp =() => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // redirect log in
    const googleLogin = () => {
        setLoading(true)
        signInWithRedirect(auth, googleProvider)
        return getRedirectResult(auth)
    }

    //-------------- observer --------------------
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else{
                setUser({})
            }
            setLoading(false)
        })
    }, [])
    return {
        user,
        error,
        setError,
        setLoading,
        isLoading,
        emailPassAuth,
        login,
        emailLogout,
        googleSignUp,
        googleLogin
    }

}

export default useFirebase