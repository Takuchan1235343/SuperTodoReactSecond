import {CreateTaskForm} from './CreateTaskForm'
import {IncompleteTaskList} from './IncompleteTaskList'
import {CompleteTaskList} from './CompleteTaskList'
import {CorrespondingTaskList} from "./CorrespondingTaskList";
import {useTasks} from '../hooks/useTasks'

export const MainContent = () => {
    const {
        incompleteTasks,
        completeTasks,
        correspondingTasks,
    } = useTasks()

    return (
        <main className=" flex flex-col items-center w-4/5 space-y-2 ">

            <CreateTaskForm className="w-full"/>

            <div id='portal-root' className="w-full space-y-2 ">
                <IncompleteTaskList tasks={incompleteTasks}/>
                <CorrespondingTaskList tasks={correspondingTasks}/>
                <CompleteTaskList tasks={completeTasks}/>
            </div>

        </main>
    )
}