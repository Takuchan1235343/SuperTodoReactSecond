import { CreateTaskForm } from './CreateTaskForm'
import { IncompleteTaskList } from './IncompleteTaskList'
import { CompleteTaskList } from './CompleteTaskList'
import { useTasks } from '../hooks/useTasks'

export const MainContent = () => {
  const {
    incompleteTasks,
    completeTasks,
    hasReachedTaskLimit
  } = useTasks()

  return (
    <main className="flex justify-center w-full">
      <CreateTaskForm disabled={hasReachedTaskLimit}/>
      <IncompleteTaskList tasks={incompleteTasks}/>
      <CompleteTaskList tasks={completeTasks}/>
    </main>
  )
}