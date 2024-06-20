import {refs, queries} from '../firebase/firestore'
import {setDoc, updateDoc, deleteDoc, onSnapshot} from 'firebase/firestore'
import {randomId} from '../utils/randomId'
import {useEffect, useMemo, useState} from 'react'

export const createTask = async (title) => {
    const newTask = {
        title,
        id: randomId(),
        status: 'incomplete',
        date: new Date(),
        memo: '',
        priority: 0,
        category: ''
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

export const changeDate = async (taskId, newDate) => {
    const taskRef = refs.task(taskId)
    await updateDoc(taskRef, {date: newDate})
}

export const changeMemo = async (taskId, newMemo) => {
    const taskRef = refs.task(taskId)
    await updateDoc(taskRef, {memo: newMemo})
}

export const changeCategory = async (taskId, newCategory) => {
    const taskRef = refs.task(taskId)
    await updateDoc(taskRef, {category: newCategory})


}

export const useTasks = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => onSnapshot(queries.tasksOrderedByPriority(), ({docs}) => {
        setTasks(docs.map(doc => doc.data()))
    }), [])

    const moveTask = async (taskId, newStatus) => {
        await changeStatus(taskId, newStatus)
    }

    const incompleteTasks = useMemo(
        () => tasks.filter(task => task.status === 'incomplete'), [tasks]
    )

    const completeTasks = useMemo(
        () => tasks.filter(task => task.status === 'complete'), [tasks]
    )

    const correspondingTasks = useMemo(
        () => tasks.filter(task => task.status === 'corresponding'), [tasks]
    )

    const allTasks = useMemo(
        () => tasks, [tasks]
    )

    return {
        incompleteTasks,
        completeTasks,
        correspondingTasks,
        moveTask,
        allTasks
    }


}
