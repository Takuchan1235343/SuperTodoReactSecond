import {useEffect, useState, useMemo} from 'react'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile
} from 'firebase/auth'
import {auth} from '../firebase/auth'
import {getAuthErrorMessage} from '../firebase/auth'
import {GoogleAuthProvider} from 'firebase/auth'

const provider = new GoogleAuthProvider()

export const useAuth = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => onAuthStateChanged(auth, (user) => setUser(user)), [])

    const clearError = () => setError(null)
    const errorMessage = useMemo(() => getAuthErrorMessage(error), [error])

    const signUp = async (email, password) => {
        clearError()
        await createUserWithEmailAndPassword(auth, email, password).catch(setError)
    }

    const signIn = async (email, password) => {
        clearError()
        await signInWithEmailAndPassword(auth, email, password).catch(setError)
    }

    const signInWithGoogle = async () => {
        clearError();
        try {
            const result = await signInWithPopup(auth, provider);
            await updateProfile(result.user, {
                displayName: user.displayName
            });
        } catch (error) {
            setError(error);
        }
    };

    const signOut = async () => {
        await auth.signOut()
    }
    return {signUp, signIn, signOut, signInWithGoogle, user, errorMessage,}
}


