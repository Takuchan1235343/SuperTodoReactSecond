import {collection, doc, getFirestore, orderBy, query} from 'firebase/firestore'
import {auth} from './auth'
import {app} from './app'

export const firestore = getFirestore(app)

export const refs = {
    users() {
        return collection(firestore, 'users')
    },

    user() {
        return doc(this.users(), auth.currentUser.uid)
    },

    tasks() {
        return collection(this.user(), 'tasks')
    },


    task(taskId) {
        return doc(this.tasks(), taskId)
    }

}

export const queries = {
    tasksOrderedByPriority() {
        return query(refs.tasks(), orderBy('priority', 'desc'))
    }
}