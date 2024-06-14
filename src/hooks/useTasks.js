import {refs, queries} from '../firebase/firestore'
import {setDoc, updateDoc, deleteDoc, onSnapshot} from 'firebase/firestore'
import {randomId} from '../utils/randomId'
import {useEffect, useMemo, useState} from 'react'

//各ボタンの設定
export const createTask = async (title) => {
    const newTask = {
        title,
        id: randomId(),
        status: 'incomplete',
        priority: 0,
    }
    await setDoc(refs.task(newTask.id), newTask)
}

export const removeTask = async (taskId) => {
    const taskRef = refs.task(taskId)
    await deleteDoc(taskRef)
}

export const changePriority = async (taskId, newPriority) => {
    const taskRef = refs.task(taskId)
    await updateDoc(taskRef, {priority: newPriority})

}
export const changeStatus = async (taskId, newStatus) => {
    const taskRef = refs.task(taskId)
    await updateDoc(taskRef, {status: newStatus})

}


//ステータスのよる仕分け

export const useTasks = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => onSnapshot(queries.tasksOrderedByPriority(), ({docs}) => {
        setTasks(docs.map(doc => doc.data()))
    }), [])


    const incompleteTasks = useMemo(
        () => tasks.filter(task => task.status === 'incomplete'), [tasks]
    )

    const completeTasks = useMemo(
        () => tasks.filter(task => task.status === 'complete'), [tasks]
    )

    const correspondingTasks = useMemo(
        () => tasks.filter(task => task.status === 'corresponding'), [tasks]
    )

    const hasReachedTaskLimit = useMemo(
        () => incompleteTasks.length >= 5, [incompleteTasks]
    )


    return {
        incompleteTasks,
        completeTasks,
        hasReachedTaskLimit,
        correspondingTasks,
    }


}
