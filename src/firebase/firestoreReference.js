import { collection, doc } from 'firebase/firestore'
import { auth, firestore } from './firebaseConfig'

export const refs = {
  users () {
    return collection(firestore, 'users')
  },

  user () {
    return doc(this.users(), auth.currentUser.uid)
  },

  tasks () {
    return collection(this.user(), 'tasks')
  },

  task (taskId) {
    return doc(this.tasks(), taskId)
  }

}