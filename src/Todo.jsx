import { CreateTaskList } from './components/CreateTaskList'
import { InCompleteTaskList } from './components/InCompleteTaskList'
import { CompleteTaskList } from './components/CompleteTaskList'

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
      <CreateTaskList
        onClickAdd={createTask}
        disabled={hasReachedTaskLimit}
      />

      {hasReachedTaskLimit && (
        <p style={{ color: 'red' }}>登録できるTODOは５個まで</p>
      )}

      <InCompleteTaskList
        tasks={incompleteTasks}
        onClickComplete={completeTask}
        onClickDelete={removeTask}
      />

      <CompleteTaskList
        tasks={completeTasks}
        onClickBack={incompleteTask}
      />

    </>
  )
}