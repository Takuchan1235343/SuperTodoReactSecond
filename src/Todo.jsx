import './styles.css'
import { useEffect, useState } from 'react'
import { InputTodo } from './components/InputTodo'
import { IncompleteTodo } from './components/InCompleteTodo'
import { CompleteTodo } from './components/CompleteTodo'
import { deleteDoc, onSnapshot, setDoc } from 'firebase/firestore'
import {
  getIncompleteTodosRef,
  getIncompleteTodoRef,
  getCompleteTodosRef,
  getCompleteTodoRef,
} from './firestoreReference'

export default function Todo () {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])

  const onChangeTodoText = (e) => setTodoText(e.target.value)

  const randomId = () => Math.random().toString(32).substring(2)

  const onClickAdd = async () => {
    if (todoText === '') return

    const newTodo = {
      id: randomId(),
      text: todoText,
    }

    await setDoc(getIncompleteTodoRef(newTodo.id), newTodo)
  }

  const onClickComplete = async (index) => {
    const targetTodo = incompleteTodos[index]

    const incompleteTodoRef = getIncompleteTodosRef(targetTodo.id)
    await deleteDoc(incompleteTodoRef)

    const completeTodoRef = getCompleteTodoRef(targetTodo.id)
    await setDoc(completeTodoRef, targetTodo)
  }

  const onClickDelete =async (index) => {
    const targetTodo = incompleteTodos[index]
    const incompleteTodoRef = getIncompleteTodosRef(targetTodo.id)
    await deleteDoc(incompleteTodoRef)
  }

  const onClickBack =async (index) => {
    const targetTodo = completeTodos[index]

    const completeTodoRef = getCompleteTodosRef(targetTodo.id)
    await deleteDoc(completeTodoRef)

    const incompleteTodoRef = getIncompleteTodoRef(targetTodo.id)
    await setDoc(incompleteTodoRef, targetTodo)
  }

  useEffect(() => {

    const unsubscribeIncomplete = onSnapshot(getIncompleteTodosRef(),
      (snapshot) => {
        setIncompleteTodos(snapshot.docs.map(doc => doc.data()))
      })
    const unsubscribeComplete = onSnapshot(getCompleteTodosRef(),
      (snapshot) => {
        setCompleteTodos(snapshot.docs.map(doc => doc.data()))
      })

    return () => {
      unsubscribeIncomplete()
      unsubscribeComplete()
    }
  }, [])

  const isMaxLimitInCompleteTodos = incompleteTodos.length >= 5

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
        disabled={isMaxLimitInCompleteTodos}
      />

      {isMaxLimitInCompleteTodos && (
        <p style={{ color: 'red' }}>登録できるTODOは５個まで</p>
      )}

      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodo
        completeTodos={completeTodos}
        onClickBack={onClickBack}
      />

    </>
  )
}