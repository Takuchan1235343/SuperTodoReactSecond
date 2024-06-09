import { CreateTaskForm } from './CreateTaskForm'
import { IncompleteTaskList } from './IncompleteTaskList'
import { CompleteTaskList } from './CompleteTaskList'
import { useTasks } from '../hooks/useTasks'

const style = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}

const {
  incompleteTasks,
  completeTasks,
  hasReachedTaskLimit
} = useTasks()

export const MainContent = () => {

  return (
    <main style={style}>
      <CreateTaskForm disabled={hasReachedTaskLimit}/>
      <IncompleteTaskList tasks={incompleteTasks}/>
      <CompleteTaskList tasks={completeTasks}/>
    </main>
  )
}