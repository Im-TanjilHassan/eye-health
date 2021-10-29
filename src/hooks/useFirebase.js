import firebaseAuthInit from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithRedirect ,  } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseAuthInit()

const auth = getAuth();
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {

    // error
    const [error, setError] = useState('')

    // user
    const [user, setUser] = useState('')

    //------------------ email and password sign up ----------------------
    const emailPassAuth = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // login process
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)

        .then(result => {
            const user = result.user
            setUser(user)
            setError('')
            console.log(user)
        })
        .catch(error => {
            setError(error.message)
        })
    }

    // logout process
    const emailLogout = () => {
        signOut(auth).then(() => {
            setUser('')
        })
    }

    //------------- google signup ----------------

    // signup with pop up
    const googleSignUp =() => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user
            setUser(user)
            console.log(user)
            setError('')
        })
        .catch(error => {
            setError(error.message)
        })
    }

    // redirect log in
    const googleLogin = () => {
        signInWithRedirect(auth, googleProvider)
        .then(result => {
            const user = result.user
            setUser(user)
            console.log(user)
        })
    }

    //-------------- observer --------------------
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])
    return {
        user,
        error,
        setError,
        emailPassAuth,
        login,
        emailLogout,
        googleSignUp,
        googleLogin
    }

}

export default useFirebase