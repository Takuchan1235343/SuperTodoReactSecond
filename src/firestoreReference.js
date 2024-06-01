import { collection, doc } from 'firebase/firestore'
import { auth, firestore } from './firebaseConfig'

export const getUserRef = () => doc(collection(firestore, 'users'), auth.currentUser.uid)

export const getIncompleteTodosRef = () => collection(getUserRef(), 'incompleteTodos')

export const getIncompleteTodoRef = (todoId) =>{
 return  doc(getIncompleteTodosRef(), todoId)
}

export const getCompleteTodosRef = () => collection(getUserRef(), 'completeTodos')

export const getCompleteTodoRef = (todoId) =>{
  return  doc(getCompleteTodosRef(), todoId)
}
