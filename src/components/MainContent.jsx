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
    <main className="flex flex-col items-center w-full">
      <CreateTaskForm disabled={hasReachedTaskLimit}/>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center align-middle ">
        <IncompleteTaskList tasks={incompleteTasks}/>
        <CompleteTaskList tasks={completeTasks}/>
      </div>
    </main>
  )
}