import { useEffect, useState, useMemo } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../firebase/auth'
import { getErrorMessage } from '../firebase/auth'

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => onAuthStateChanged(auth, (user) => setUser(user)), [])

  const clearError = () => setError(null)
  const errorMessage = useMemo(() => getErrorMessage(error), [error])

  const signUp = async (email, password) => {
    clearError()
    await createUserWithEmailAndPassword(auth, email, password).catch(setError)
  }

  const signIn = async (email, password) => {
    clearError()
    await signInWithEmailAndPassword(auth, email, password).catch(setError)
  }

  const signOut = async () => {
    await auth.signOut()
  }
  return { signUp, signIn, signOut, user, errorMessage }
}


