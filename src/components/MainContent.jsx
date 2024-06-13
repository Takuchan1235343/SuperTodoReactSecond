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
        <main className=" flex flex-col items-center ">
            <CreateTaskForm disabled={hasReachedTaskLimit}/>
            <div>
                <IncompleteTaskList tasks={incompleteTasks}/>
                <CorrespondingTaskList tasks={correspondingTasks}/>
                <CompleteTaskList tasks={completeTasks}/>
            </div>
        </main>
    )
}