import { CreateTaskForm } from './CreateTaskForm'
import { IncompleteTaskList } from './IncompleteTaskList'
import { CompleteTaskList } from './CompleteTaskList'
import { useTasks } from '../hooks/useTasks'

const style = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}

export const MainContent = () => {
  const {
    incompleteTasks,
    completeTasks,
    hasReachedTaskLimit
  } = useTasks()

  return (
    <main style={style}>
      <CreateTaskForm disabled={hasReachedTaskLimit}/>
      <IncompleteTaskList tasks={incompleteTasks}/>
      <CompleteTaskList tasks={completeTasks}/>
    </main>
  )
}