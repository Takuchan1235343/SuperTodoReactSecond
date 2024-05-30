import './styles.css'
import { useState } from 'react'
import { InputTodo } from './components/InputTodo'
import { IncompleteTodo } from './components/InCompleteTodo'
import { CompleteTodo } from './components/CompleteTodo'
import { auth, firestore } from './firebaseConfig'
import { collection, doc, setDoc, getDoc } from 'firebase/firestore'

export default function Todo () {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])

  const onChangeTodoText = (e) => setTodoText(e.target.value)

  const onClickAdd = () => {
    if (todoText === '') return
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos)
    setTodoText('')
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos]
    const completedTodo = newIncompleteTodos.splice(index, 1)[0]
    const newCompleteTodos = [...completeTodos, completedTodo]
    setIncompleteTodos(newIncompleteTodos)
    setCompleteTodos(newCompleteTodos)
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(index, 1)
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
    setCompleteTodos(newCompleteTodos)
    setIncompleteTodos(newIncompleteTodos)
  }

  const onClickSave = async () => {
    const colRef = collection(firestore, 'todos')
    const userId = auth.currentUser.uid
    const docRef = doc(colRef, userId)
    await setDoc(docRef, {
      incompleteTodos: incompleteTodos,
      completeTodos: completeTodos
    })
  }

  const onClickLoad = async () => {
    const colRef = collection(firestore, 'todos')
    const userId = auth.currentUser.uid
    const docRef = doc(colRef, userId)
    const snapshot = await getDoc(docRef)
    const data = snapshot.data()
    setIncompleteTodos(data?.incompleteTodos ?? [])
    setCompleteTodos(data?.completeTodos ?? [])
  }

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

      <button onClick={onClickSave}>保存</button>
      <button onClick={onClickLoad}>読み込み</button>
    </>
  )
}