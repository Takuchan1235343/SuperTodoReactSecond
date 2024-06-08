import './styles.css'
import { InputTodo } from './components/InputTodo'
import { IncompleteTodo } from './components/InCompleteTodo'
import { CompleteTodo } from './components/CompleteTodo'

import {
  createTask,
  completeTask,
  incompleteTask,
  removeTask,
  useTasks,
  } from './hooks/useTasks'

export default function Todo () {
  const {
    incompleteTasks,
    completeTasks,
    hasReachedTaskLimit
  } = useTasks()



  return (
    <>
      <InputTodo
        onClickAdd={createTask}
        disabled={hasReachedTaskLimit}
      />

      {hasReachedTaskLimit && (
        <p style={{ color: 'red' }}>登録できるTODOは５個まで</p>
      )}

      <IncompleteTodo
        tasks={incompleteTasks}
        onClickComplete={completeTask}
        onClickDelete={removeTask}
      />

      <CompleteTodo
        tasks={completeTasks}
        onClickBack={incompleteTask}
      />

    </>
  )
}