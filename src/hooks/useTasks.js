import { refs } from '../firestoreReference'
import { setDoc, updateDoc } from 'firebase/firestore'
import { randomId } from '../utils/randomId'

export const createTask = async (title) => {
  const newTask = {
    title,
    id: randomId(),
    status: 'incomplete',
  }
  await setDoc(refs.task.id, newTask);
}

export const completeTask = async (taskId) => {
  const taskRef = refs.task(taskId);
  await updateDoc(taskRef, { status: 'complete' });
}