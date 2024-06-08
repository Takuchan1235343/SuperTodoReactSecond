import { refs } from '../firestoreReference'
import { setDoc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore'
import { randomId } from '../utils/randomId'
import { useEffect, useMemo, useState } from 'react'

//各ボタンの設定
export const createTask = async (title) => {
  const newTask = {
    title,
    id: randomId(),
    status: 'incomplete',
  }
  await setDoc(refs.task(newTask.id), newTask);
}

export const completeTask = async (taskId) => {
  const taskRef = refs.task(taskId);
  await updateDoc(taskRef, { status: 'complete' });
}

export const incompleteTask = async (taskId) => {
  const taskRef = refs.task(taskId);
  await updateDoc(taskRef, { status: 'incomplete' });
}

export const removeTask = async (taskId) => {
  const taskRef = refs.task(taskId);
  await deleteDoc(taskRef);
}

//ステータスのよる仕分け


export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => onSnapshot(refs.tasks(), ({docs}) => {
    setTasks(docs.map(doc => ({...doc.data()})));
  }), []);

  const incompleteTasks = useMemo(
    () => tasks.filter(task => task.status === 'incomplete'), [tasks]
  );

  const completeTasks = useMemo(
    () => tasks.filter(task => task.status === 'complete'), [tasks]
  );

  const hasReachedTaskLimit = useMemo(
    () => incompleteTasks.length >= 5, [incompleteTasks]
  );

  return {
    tasks,
    incompleteTasks,
    completeTasks,
    hasReachedTaskLimit,
  };
}
