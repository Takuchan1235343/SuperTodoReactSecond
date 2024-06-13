import {CreateTaskForm} from './CreateTaskForm'
import {IncompleteTaskList} from './IncompleteTaskList'
import {CompleteTaskList} from './CompleteTaskList'
import {CorrespondingTaskList} from "./CorrespondingTaskList";
import {useTasks} from '../hooks/useTasks'

export const MainContent = () => {
    const {
        incompleteTasks,
        completeTasks,
        hasReachedTaskLimit,
        correspondingTasks,
    } = useTasks()

    return (
        <main className="w-11/12 max-w-4xl mx-auto  flex flex-col items-center">
            <CreateTaskForm disabled={hasReachedTaskLimit}/>
            <div
                className="w-11/12 max-w-4xl mx-auto flex flex-col md:flex-row justify-center p-4 items-center align-middle rounded-lg">
                <IncompleteTaskList tasks={incompleteTasks}/>
                <CorrespondingTaskList tasks={correspondingTasks}/>
                <CompleteTaskList tasks={completeTasks}/>
            </div>
        </main>
    )
}